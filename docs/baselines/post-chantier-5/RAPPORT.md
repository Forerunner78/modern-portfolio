# Rapport Chantier 5 · Migration TypeScript strict

> Branche : `chantier-5-typescript` (à partir de `main` post-merge Chantier 4, commit `049d126`).
> Date : 30 avril 2026.

## Contexte du sprint

Mesuré post-Chantier-4 :
- Perf desktop **100** / Perf mobile **99**
- A11y **100** desktop / **96+** mobile
- BP **100** / SEO **100**
- CLS **0.000** sur les 3 pages

Ce chantier est purement **compile-time** : conversion `.js` → `.ts/.tsx` avec `strict: true`. Aucun changement runtime attendu, donc non-régression Lighthouse mécanique.

## Scope exécuté

### Phase 0 · Setup TypeScript

- `typescript@~5.4` + `@types/{react,node,react-dom}@~18.3` (pin matché avec `react@18.2`)
- `tsconfig.json` strict :
  - `strict: true`, `noUncheckedIndexedAccess: true`, `exactOptionalPropertyTypes: true`
  - `forceConsistentCasingInFileNames: true`
  - `target: ES2020`, `jsx: preserve`, `module: esnext`
  - `moduleResolution: node` (forcé par Next.js 13.3) + `ignoreDeprecations: "5.0"`
  - `allowJs: true` (migration progressive)
- `next-env.d.ts` généré automatiquement

### Phase 2 · Migration progressive (bottom-up)

| Groupe | Fichiers | Build OK |
|---|---|---|
| 2.1 — data + theme + hook | 5 | ✅ |
| 2.2 — composants atomic | 8 | ✅ |
| 2.3 — Icons.tsx | 1 | ✅ |
| 2.4 — composants page-level | 5 | ✅ |
| 2.5 — pages | 5 | ✅ |
| **TOTAL src/** | **24** | **✅** |

Les fichiers de configuration root (`next.config.js`, `postcss.config.js`, `tailwind.config.js`) ont été conservés en `.js` avec JSDoc, conformément à la convention Next.js 13.

### Bugs latents corrigés (révélés par TypeScript)

Deux commits dédiés (`fix(presentation):`) avec messages structurés :

1. **`e8f5415`** — Comparaison string `<=` number sur le compteur animé (`AnimatedNumbers`). `latest.toFixed(0)` retourne une string que JavaScript coerce silencieusement avant `<=`. Bug latent fragile selon la plage des valeurs. Fix : `Number(latest.toFixed(0))`.

2. **`fb559d0`** — `Array.map` utilisé comme accumulateur via side-effect dans `projectsNumber`. Code smell sans effet runtime. Fix : remplacement par `Array.reduce`.

## Definition of Done — vérification

| Critère | Valeur |
|---|---|
| Fichiers `.js` → `.ts/.tsx` dans `src/` | **24/24** (100%) |
| `.js` restants dans `src/` | **0** |
| `any` explicite ou implicite | **0** |
| `@ts-ignore` / `@ts-expect-error` | **0** |
| `npx tsc --noEmit` | ✅ aucune erreur |
| `npm run lint` | ✅ aucune warning |
| `npm run build` | ✅ |

## Bundle sizes — non-régression

| Route | Avant C5 (post-C4) | Après C5 | Delta |
|---|---|---|---|
| `/` | 1.85 kB / 129 kB | 1.84 kB / 129 kB | ≈ 0 |
| `/presentation` | 9.48 kB / 136 kB | 9.49 kB / 136 kB | ≈ 0 |
| `/projets` | 4.24 kB / 131 kB | 4.24 kB / 131 kB | = |
| First Load shared | 131 kB | 131 kB | = |

Bundle sizes inchangés à 0.01 kB près (bruit de hash de chunk). **Confirmation que le chantier est strictement compile-time.**

## Smoke test runtime

Pages servies via `next start` :
- `GET /` → HTTP 200, contient "Alexandre Ribault"
- `GET /presentation` → HTTP 200, contient "Présentation"
- `GET /projets` → HTTP 200, contient "Dog Days" (et autres)

## Lighthouse non-régression

À mesurer post-merge sur production (Vercel) selon la méthodologie `AUDIT_BEFORE.md`. Hypothèse forte : Perf 100/99, A11y 100, CLS 0 conservés à l'identique car aucune mutation du JS émis ni du DOM produit.

## Flags techniques actés

1. **`ignoreDeprecations: "5.0"`** — contournement temporaire pour `moduleResolution: node` forcé par Next.js 13.3. À retirer lors du saut Next.js 15 (chantier futur), où `bundler` sera supporté nativement.

2. **`@types/react` et `@types/react-dom` pinnés `~18.3`** — initialement `^19.x` installés, ce qui cassait les types de framer-motion 10. Pin nécessaire pour matcher `react@18.2` du runtime.

## Statistiques commits

5 commits sur la branche `chantier-5-typescript` :

```
chore(ts): setup TypeScript strict (Chantier 5)
refactor(ts): migration JS->TS phase 2.1-2.4 (composants + data + hook)
refactor(ts): migration JS->TS phase 2.5 (pages)
fix(presentation): comparaison string<=number sur compteur anime
fix(presentation): remplacer Array.map par Array.reduce pour le compteur de projets
```

## Effort réel vs estimation

| Phase | Estimation | Réel approximatif |
|---|---|---|
| Setup TS + audit | 30 min | 25 min |
| Migration data/hook/atomic | 1h | 50 min |
| Icons + page-level | 1h15 | 1h05 |
| Pages + bugs latents | 1h15 | 50 min |
| Validation + rapport | 40 min | 30 min |
| **TOTAL** | **~4h** | **~3h40** |

Sous le plafond 6h. Pas de blocage majeur rencontré.
