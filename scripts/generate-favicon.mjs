// Generation du favicon SVG (icone principale moderne) + favicon.ico 32x32
// (PNG-encoded ICO, fallback compatible IE/Edge legacy + RSS readers).
//
// Cible visuelle : monogramme "AR" sur disque noir, identique au Logo
// rond du site (cf. src/components/Logo.js). Couleurs alignees avec
// le theme Tailwind : bg-dark = #1B1B1B, text-light = #F5F5F5.
//
// Cible poids : SVG < 1 KB, ICO < 5 KB.
// Lance via : node scripts/generate-favicon.mjs

import sharp from "sharp";
import { writeFile, stat } from "node:fs/promises";

const SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <circle cx="32" cy="32" r="32" fill="#1B1B1B"/>
  <text x="32" y="32" dy=".34em" text-anchor="middle"
        font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif"
        font-size="30" font-weight="800" fill="#F5F5F5"
        letter-spacing="-1">AR</text>
</svg>
`;

await writeFile("public/favicon.svg", SVG, "utf8");

const pngBuffer = await sharp(Buffer.from(SVG))
    .resize(32, 32)
    .png({ compressionLevel: 9 })
    .toBuffer();

await writeFile("public/favicon.ico", pngBuffer);

const [svgStat, icoStat] = await Promise.all([
    stat("public/favicon.svg"),
    stat("public/favicon.ico"),
]);

console.log(`favicon.svg : ${(svgStat.size / 1024).toFixed(2)} KB`);
console.log(`favicon.ico : ${(icoStat.size / 1024).toFixed(2)} KB (PNG-encoded ICO 32x32)`);
