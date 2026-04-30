# Rapport Lighthouse · Post Chantier 3 (CLS)

> Mesures automatisées via Lighthouse CLI 13.1.0, headless Chrome, build production locale (`npm run build && npm run start`), 30 avril 2026.

## Méthodologie

- Build : `next build` (Next.js 13.3.0)
- Serveur : `npm run start` sur `http://localhost:3000`
- Outil : `npx lighthouse <url> --preset=desktop` (desktop) ou `--form-factor=mobile` (mobile)
- Chrome flags : `--headless=new --no-sandbox`
- 3 runs back-to-back sur `/projets` desktop pour mesurer la variance (page la plus à risque CLS)

## Résultats CLS

### `/projets` desktop · 3 runs back-to-back

| Run | Performance | CLS |
|---:|:---:|:---:|
| 1 | 99 | **0.0000** |
| 2 | 100 | **0.0000** |
| 3 | 99 | **0.0000** |

**Variance CLS entre runs : 0.0000** (cible : < 0.05).

### Toutes pages · synthèse

| Page | Device | Performance | CLS |
|---|:---:|:---:|:---:|
| `/` | desktop | 100 | 0.0000 |
| `/presentation` | desktop | 100 | 0.0003 |
| `/projets` | desktop | 99-100 | 0.0000 |
| `/` | mobile | 98 | 0.0000 |
| `/presentation` | mobile | 96 | 0.0000 |
| `/projets` | mobile | 95 | 0.0000 |

## Comparaison avant / après

| Métrique | Avant Chantier 3 (post LinkedIn) | Après Chantier 3 |
|---|:---:|:---:|
| CLS desktop run 1 | 0.239 | **0.0000** |
| CLS desktop run 2 | 0.567 | **0.0000** |
| CLS desktop run 3 | 0.576 | **0.0000** |
| Variance | 0.337 | **0.0000** |
| CLS mobile | 0.23 | **0.0000** |

> Le CLS mesuré localement avant tout fix (5e run automatisé sur `/projets` desktop avant les correctifs) atteignait **0.521** avec une variance < 0.03 entre runs. La variance plus large observée par l'utilisateur (`0.239 / 0.567 / 0.576`) s'explique par les conditions DevTools (cache navigateur, throttling Cable, mesures réelles) — la cause racine reste la même.

## Cause racine

Lighthouse audit `layout-shifts` listait 15 shifts, dont les 3 plus gros (~0.10, ~0.06, ~0.04) provenaient tous des trois `<motion.div>` du composant [`TransitionEffect.js`](../../../src/components/TransitionEffect.js) :

```jsx
<motion.div
    initial={{ x: "100%", width: "100%" }}
    animate={{ x: "0%", width: "0%" }}
    ...
/>
```

L'animation de la propriété `width` n'est **pas** GPU-accélérée (contrairement à `transform`) : chaque frame déclenche un layout recalc, comptabilisé dans le CLS pendant les 800 ms de l'animation × 3 cascades = ~0.5 de CLS cumulé.

Les images projets (Dog Days 1.62, Alex Shop 2.00, Runova/Commis 0.46) avaient également un risque CLS secondaire (pas d'aspect-ratio fixe sur le container, ratios disparates), corrigé en parallèle.

## Fichiers modifiés

- `src/components/TransitionEffect.js` — animation `width` remplacée par pur `translateX` (transform GPU-accéléré). **Fix principal.**
- `src/styles/theme.js` — `imageContainer` enrichi de `relative bg-gray-100 dark:bg-gray-900` + `aspect-[16/10]` (featured) / `aspect-[4/3]` (normal).
- `src/components/ProjectCard.js` — `<Image>` passe en mode `fill` + `object-contain`, retrait de `motion(Image)`, hover `scale` déplacé sur le wrapper via `group/img`.
- `src/pages/presentation.js` — photo encapsulée dans un container `aspect-[4/3] relative overflow-hidden` + `<Image fill object-cover>`.
- `src/pages/_app.js` — Montserrat configurée avec `display: 'swap'`, `adjustFontFallback: true`, `preload: true` (durcissement, défauts déjà bons).

## Validation finale

L'utilisateur doit refaire 3 runs Lighthouse via Chrome DevTools (mode desktop, throttling Cable) **après merge en `main`** pour confirmer dans les conditions exactes du post LinkedIn d'avril, avant publication du post Chantier 3.
