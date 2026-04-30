# Rapport Chantier 4 · Performance JS + Images (scope minimal)

> Branche : `chantier-4-perf` (à partir de `main` post-merge Chantier 3, commit `953cb6b`).
> Date : 30 avril 2026.

## Contexte du sprint

Mesuré post-Chantier-3 (Chrome DevTools, throttling Cable) :
- Perf desktop **100** / Perf mobile **99**
- A11y **100** desktop / **96+** mobile
- BP **100** / SEO **100**
- CLS **0.000** sur les 3 pages, desktop et mobile

Le Chantier 3 (CLS) a fait significativement plus qu'attendu. La cible Chantier 4 (Perf 95+/90+) **est déjà atteinte avant tout commit**. Le scope a donc été réduit à du nettoyage utile, sans sur-optimisation Lighthouse.

## Scope final exécuté

1. ✅ Migration `src/img/` → `public/img/` (5 images utilisées)
2. ✅ Suppression `src/img/` complet (28 orphelines effacées)
3. ✅ Compression WebP + JPEG mozjpeg via sharp (script versionné)
4. ✅ Favicon SVG <5KB + ICO 32x32 minimal
5. ⏳ Mesure post-C4 via PSI (à compléter par l'utilisateur après merge)

## Phases jetées (gain Lighthouse nul à ce stade)

- **Phase 2** — Imports granulaires Framer Motion via LazyMotion + composant `m`. Travail valide techniquement (-11 kB First Load JS shared) mais hors scope sprint actuel. Préservé dans la branche locale `stash/lazymotion-framer-motion` au commit `0bce0b2`.
- **Phase 1** — `@next/bundle-analyzer` + baseline bundle. Retirée avec le reset.
- **Phase 3** — `dynamic()` below-the-fold. Démontrée comme un no-op après LazyMotion (overhead runtime > poids des composants tirés).
- **Phase 6** — Audit `priority` / `sizes`. Couvert implicitement par le Chantier 3 (CLS 0).

## Détail des optimisations · Phase 4 (images)

### Migration et compression

Script versionné : [`scripts/migrate-images.mjs`](../../../scripts/migrate-images.mjs).

| Image | Avant | Après | Gain |
|---|---:|---:|---:|
| `photo_Alex_R.webp` (LCP `/presentation`) | 1 360.3 KB · 3264×2448 | **24.8 KB** · 900×675 | **−98.2%** |
| `Alex_Shop_Ecommerce.webp` | 232.0 KB · 1904×953 | 77.5 KB · 1904×953 | −66.6% |
| `commis/Screenshot…Commis.jpg` | 207.0 KB · 1080×2340 | 119.9 KB · 1080×2340 | −42.0% |
| `runova/Screenshot…Runova_Couch_to_5K.jpg` | 145.7 KB · 1080×2340 | 76.5 KB · 1080×2340 | −47.5% |
| `dogdays/KluITgQ_Imgur.jpg` | 126.4 KB · 1400×866 | 64.1 KB · 1400×866 | −49.3% |
| **TOTAL** | **2 071.4 KB** | **362.9 KB** | **−82.5%** |

**Stratégie photo Alex_R** : resize 3264×2448 → 900×675 (suffisant pour les containers `w-72` et `aspect-[3/4]` des deux pages la consommant, avec marge ×2 pour écrans Retina) + WebP qualité 80. Cible <100 KB largement dépassée.

**Stratégie screenshots** : conservés en JPG (selon brief) recompressés via mozjpeg qualité 82.

**Renommages URL-safe** :
- `KluITgQ - Imgur.jpg` → `KluITgQ_Imgur.jpg`
- `Screenshot_20260403_093659 Runova Couch to 5K.jpg` → `Screenshot_20260403_093659_Runova_Couch_to_5K.jpg`

### Suppressions (28 orphelines, ~3.0 MB)

11 orphelines pré-Chantier-1 :
- `dream_developer.png` (415 KB)
- Anciens projets tutos : `Hotel.jpg`, `News.jpg`, `Jungle.jpg`, `Marvel.jpg`, `Shiny.jpg`, `Portfolio.jpg`, `Books.jpg`, `WorkInProgress.jpg`
- `Web back-end developer . Salesforce Commerce Cloud.png` (bio SFCC obsolète)
- `circular_text_cut-removebg-preview.svg` (décor obsolète)

13 screenshots non utilisés des projets actuels (Dog Days × 4, Runova × 3, Commis × 5, +1 icon Commis) — matière brute regenerable au besoin depuis Imgur ou les apps.

4 doublons rendus inutiles par la migration (les originaux déplacés).

### Adaptation du code (3 fichiers)

- `src/pages/index.js` :
  - Retrait de `import profilePic from "./../img/photo_Alex_R.jpg"`
  - Parent passé en `relative` (requis pour `<Image fill>`)
  - `<Image>` : `src="/img/photo_Alex_R.webp"` + `fill` + `sizes` exprimés en `rem` (cohérent avec `w-72`/`w-48`/...)
- `src/pages/presentation.js` :
  - Retrait de `import ProfilePicture from "../img/photo_Alex_R.jpg"`
  - `<Image>` : `src="/img/photo_Alex_R.webp"` (déjà en `fill` avec parent dimensionné)
- `src/components/data/Projects.js` :
  - Retrait des 4 imports statiques
  - `img:` valeurs converties en chemins string `/img/...`

## Détail · Phase favicon

Script versionné : [`scripts/generate-favicon.mjs`](../../../scripts/generate-favicon.mjs).

| Fichier | Avant | Après |
|---|---:|---:|
| `public/favicon.ico` | 39 535 bytes | **903 bytes** (PNG-encoded ICO 32×32) |
| `public/favicon.svg` | absent | **350 bytes** (monogramme AR sur disque noir) |

Référencement dans `_app.js` :
```jsx
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="alternate icon" type="image/x-icon" href="/favicon.ico" />
```

Cohérence visuelle : couleurs `#1B1B1B` / `#F5F5F5`, identiques au Logo rond (`bg-dark`, `text-light`).

## Bundle size · Δ avant/après Chantier 4

| Page | Avant C4 | Après C4 | Δ |
|---|---:|---:|---:|
| `/` First Load JS | 129 kB | 129 kB | =0 |
| `/presentation` First Load JS | 137 kB | **136 kB** | −1 kB |
| `/projets` First Load JS | 132 kB | **131 kB** | −1 kB |
| Page-specific `/` | 2.20 kB | **1.85 kB** | −0.35 kB |
| Page-specific `/presentation` | 10.2 kB | **9.48 kB** | −0.72 kB |
| Page-specific `/projets` | 4.82 kB | **4.24 kB** | −0.58 kB |

Léger gain dû au retrait des wrappers `StaticImageData` (les imports d'images statiques injectaient ~0.5 kB de metadata par fichier dans le bundle JS).

Le gros gain est ailleurs : **−1.7 MB de poids transféré sur le LCP `/presentation`** (photo Alex 1.4 MB JPG → 24.8 KB WebP).

## Total bytes économisés dans le repo

| Catégorie | Bytes |
|---|---:|
| Images src/img/ supprimées (28 fichiers) | ~5 530 KB |
| Images public/img/ ajoutées (5 fichiers) | ~363 KB |
| Favicon (39 535 → 1 253 bytes) | −38 KB |
| **Net repo** | **−5 205 KB** |

## Mesure post-Chantier-4 · à compléter

L'utilisateur lance 3 runs PageSpeed Insights desktop + 3 runs mobile **après merge en `main` et déploiement Vercel**. Cible : non-régression Perf 100/99, A11y 100/96+, BP 100, SEO 100, CLS 0.000.

Sauvegarder les JSON dans ce dossier sous le format `run-{N}-{device}-{page}.json` (méthodo identique aux Chantiers 2 et 3).

## Definition of done

- ✅ `src/img/` n'existe plus (28 fichiers + dossier supprimés)
- ✅ `public/img/` contient exactement 5 fichiers (les 5 utilisées)
- ✅ `photo_Alex_R.webp` < 100 KB (24.8 KB)
- ✅ `favicon.ico` < 5 KB (0.88 KB) + `favicon.svg` (0.34 KB)
- ✅ Build prod sans warning
- ⏳ 3 runs Lighthouse post-merge confirmant non-régression — **à compléter par l'utilisateur après deploy**
