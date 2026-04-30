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

## Reprise · TransitionEffect en scaleX rétractation (commit b39…)

L'animation `translateX` simple du premier fix donnait un effet visuel de "fenêtre qui glisse" : double traversée gauche→droite puis droite→gauche perçue comme bizarre. Réécriture en `scaleX` + `originX` pour reproduire l'esprit de l'animation d'origine (rideau qui se ferme puis s'ouvre) tout en restant 100% transform GPU.

Implémentation :
- Pendant l'`exit` de la page sortante : `scaleX 0 → 1` avec `originX: 0` (gauche) → le rideau se ferme depuis la gauche, masque le démontage.
- Pendant l'`animate` de la page entrante : `scaleX 1 → 0` avec `originX: 1` (droite) → le rideau s'ouvre vers la droite, révèle la nouvelle page.
- `originX` bascule en `duration: 0` (saut instantané) pendant que `scaleX = 1` (rideau plein, pivot invisible à l'œil).
- Cascade conservée : 3 motion.div en z-30/20/10 avec délais 0/0.2/0.4s, durée 800 ms par couche.
- `exit` uniquement sur la première couche (z-30) pour rester fidèle à l'animation d'origine.

### Validation Lighthouse v2 (post-réécriture)

| Run | Page | Device | Performance | CLS |
|---:|---|:---:|:---:|:---:|
| 1 | /projets | desktop | 99 | **0.0000** |
| 2 | /projets | desktop | 100 | **0.0000** |
| 3 | /projets | desktop | 100 | **0.0000** |
| - | /projets | mobile | 89 | **0.0000** |

CLS = 0 maintenu sur les 4 mesures. Variance desktop nulle.

## Validation finale

L'utilisateur doit refaire 3 runs Lighthouse via Chrome DevTools (mode desktop, throttling Cable) **après merge en `main`** pour confirmer dans les conditions exactes du post LinkedIn d'avril, **et tester visuellement la transition** entre `/`, `/presentation` et `/projets` (le rideau doit donner l'impression de se fermer depuis la gauche puis s'ouvrir vers la droite, pas de glissement bizarre).
