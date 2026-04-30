// Migration et compression des 5 images utilisees du portfolio.
// Lance via : node scripts/migrate-images.mjs
//
// Source : src/img/ (28 fichiers, ~5.5 MB)
// Cible  : public/img/ (5 fichiers utilises uniquement)
//
// Strategie :
// - photo_Alex_R : WebP qualite 80, resize max 900px de large (suffisant
//   pour les containers w-72 et aspect-[3/4] des deux pages la consommant).
//   Cible < 100KB pour la photo principale (LCP candidate sur /presentation).
// - Alex_Shop_Ecommerce : WebP qualite 82 (capture d'ecran site web,
//   compression interessante).
// - 3 screenshots projets : JPG recompresse via mozjpeg qualite 82
//   (formats .jpg conserves selon brief Chantier 4).
//
// Renommages (URLs sans espaces ni tirets isoles) :
// - "Screenshot_20260403_093659 Runova Couch to 5K.jpg"
//   -> "Screenshot_20260403_093659_Runova_Couch_to_5K.jpg"
// - "KluITgQ - Imgur.jpg" -> "KluITgQ_Imgur.jpg"

import sharp from "sharp";
import { mkdir, stat } from "node:fs/promises";
import { dirname } from "node:path";

const TASKS = [
    {
        src: "src/img/photo_Alex_R.jpg",
        dest: "public/img/photo_Alex_R.webp",
        format: "webp",
        quality: 80,
        maxWidth: 900,
    },
    {
        src: "src/img/Alex_Shop_Ecommerce.jpg",
        dest: "public/img/Alex_Shop_Ecommerce.webp",
        format: "webp",
        quality: 82,
    },
    {
        src: "src/img/commis/Screenshot_20260409_210544_Commis.jpg",
        dest: "public/img/commis/Screenshot_20260409_210544_Commis.jpg",
        format: "jpeg",
        quality: 82,
    },
    {
        src: "src/img/runova/Screenshot_20260403_093659_Runova Couch to 5K.jpg",
        dest: "public/img/runova/Screenshot_20260403_093659_Runova_Couch_to_5K.jpg",
        format: "jpeg",
        quality: 82,
    },
    {
        src: "src/img/dogdays/KluITgQ - Imgur.jpg",
        dest: "public/img/dogdays/KluITgQ_Imgur.jpg",
        format: "jpeg",
        quality: 82,
    },
];

async function processOne({ src, dest, format, quality, maxWidth }) {
    await mkdir(dirname(dest), { recursive: true });

    const input = sharp(src);
    const meta = await input.metadata();
    // Applique l'orientation EXIF puis strip la metadata (sinon WebP perd l'EXIF
    // et l'image ressort dans son orientation pixel-natif, photo couchee).
    let pipeline = input.rotate();

    // Apres .rotate(), si EXIF=6/8 les dimensions visuelles sont swappees.
    const visualWidth =
        meta.orientation && meta.orientation >= 5 ? meta.height : meta.width;
    if (maxWidth && visualWidth > maxWidth) {
        pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
    }

    if (format === "webp") {
        pipeline = pipeline.webp({ quality });
    } else if (format === "jpeg") {
        pipeline = pipeline.jpeg({ quality, mozjpeg: true });
    }

    await pipeline.toFile(dest);

    const [srcStat, destStat, destMeta] = await Promise.all([
        stat(src),
        stat(dest),
        sharp(dest).metadata(),
    ]);

    return {
        src,
        dest,
        srcKB: srcStat.size / 1024,
        destKB: destStat.size / 1024,
        srcDims: `${meta.width}x${meta.height}`,
        destDims: `${destMeta.width}x${destMeta.height}`,
        ratio: destStat.size / srcStat.size,
    };
}

const results = [];
for (const task of TASKS) {
    results.push(await processOne(task));
}

console.log("\nMigration et compression terminees :\n");
console.table(
    results.map((r) => ({
        cible: r.dest.replace("public/", ""),
        avant: `${r.srcKB.toFixed(1)} KB (${r.srcDims})`,
        apres: `${r.destKB.toFixed(1)} KB (${r.destDims})`,
        gain: `${((1 - r.ratio) * 100).toFixed(1)}%`,
    }))
);

const totalAvant = results.reduce((sum, r) => sum + r.srcKB, 0);
const totalApres = results.reduce((sum, r) => sum + r.destKB, 0);
console.log(
    `\nTotal : ${totalAvant.toFixed(1)} KB -> ${totalApres.toFixed(1)} KB ` +
        `(${((1 - totalApres / totalAvant) * 100).toFixed(1)}% economises)\n`
);
