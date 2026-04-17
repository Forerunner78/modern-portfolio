# CLAUDE.md — modern-portfolio refacto

## Contexte du projet

Ce portfolio est un site Next.js existant, codé à la main en 2023 sans IA.
Il est en production sur Vercel : https://modern-portfolio-alexandre-ribault.vercel.app

Ce projet est en cours de **refacto complète assistée par Claude Code**, documentée
pour une série de posts LinkedIn. Chaque chantier est isolé, mesurable, et correspond
à un post.

L'audit de départ est dans `AUDIT_BEFORE.md` à la racine.
La roadmap complète est dans `ROADMAP_REFACTO.md` à la racine.
**Lis ces deux fichiers AVANT de commencer quoi que ce soit.**

---

## Règles de comportement

- **Toujours lire avant d'écrire** : consulter les fichiers concernés avant de modifier.
- **Un chantier à la fois** : ne pas déborder sur un autre chantier sans instruction explicite.
- **Attendre validation humaine** entre chaque chantier — ne pas enchaîner sur le Chantier N+1 sans un feu vert explicite de l'utilisateur.
- **Pas de sur-ingénierie** : rester dans le scope décrit. Pas de nouvelles features non demandées.
- **Chiffres à jour** : après chaque modification significative, rappeler quel KPI est impacté.
- **Zéro régression** : chaque chantier doit laisser le build `npm run build` en succès.
- **Commits atomiques** : un commit par sous-tâche significative, message clair en français.
  Pas de `git add .` ni `git add -A` — sélectionner les fichiers pertinents au changement.

---

## Stack actuelle

| Couche | Technologie | Version actuelle | Version cible |
|---|---|---|---|
| Framework | Next.js (Pages Router) | **13.3.0** | **15.x** |
| Langage | JavaScript | — | **TypeScript strict** |
| UI | React | 18.2.0 | 18.x (ou 19.x si compatible Next.js 15) |
| Styles | TailwindCSS | 3.3.1 | 3.x |
| Animations | Framer Motion | ^10.11.2 | imports granulaires |
| Tests | — | **ABSENT** | Vitest + Testing Library |
| Linter | ESLint next/core-web-vitals | configuré | maintenu |

**Note sur le saut Next.js 13 → 15 :** on saute 2 majeures d'un coup. Bien lire les guides de migration officiels, en particulier les changements autour du Pages Router (qui reste supporté en 15.x).

---

## Structure actuelle

```
modern-portfolio/
├── public/
│   ├── favicon.ico          # 39 KB — à remplacer (Chantier 4)
│   ├── resume.pdf           # CV téléchargeable — à mettre à jour (Chantier 1)
│   └── screenshots/         # Screenshots "before" — référence pour les posts LinkedIn
├── src/
│   ├── components/
│   │   ├── AnimatedText.js
│   │   ├── Education.js
│   │   ├── Experience.js
│   │   ├── Footer.js
│   │   ├── Icons.js          # ⚠️ 425 lignes — monolithique (pas dans scope refacto actuelle)
│   │   ├── Layout.js
│   │   ├── LiIcon.js
│   │   ├── Logo.js
│   │   ├── NavBar.js         # ⚠️ 210 lignes — à traiter en Chantier 2 (aria-label)
│   │   ├── ProjectCard.js
│   │   ├── Skills.js
│   │   ├── Technologies.js
│   │   ├── TransitionEffect.js
│   │   ├── UnderlinedLink.js
│   │   ├── data/
│   │   │   ├── Education.js
│   │   │   ├── Projects.js   # ⚠️ projets obsolètes (tutos 2023) — Chantier 1
│   │   │   └── Skills.js
│   │   └── hooks/
│   │       └── useThemeSwitcher.js
│   ├── img/                  # ⚠️ images à déplacer dans /public (Chantier 4)
│   │   └── ...               # photo_Alex_R.jpg = 1,4 MB
│   ├── pages/
│   │   ├── _app.js
│   │   ├── _document.js      # ⚠️ lang="en" sur un site français (Chantier 1)
│   │   ├── api/hello.js      # ⚠️ route inutilisée à supprimer (Chantier 1)
│   │   ├── index.js          # ⚠️ bio obsolète (SFCC uniquement) — Chantier 1
│   │   ├── presentation.js
│   │   └── projets.js        # ⚠️ projets tutos à remplacer (Chantier 1)
│   └── styles/
│       ├── globals.css
│       └── theme.js
├── AUDIT_BEFORE.md           # baseline complète — NE PAS MODIFIER
├── ROADMAP_REFACTO.md        # vision d'ensemble
├── CLAUDE.md                 # ce fichier
├── .eslintrc.json
├── jsconfig.json             # à remplacer par tsconfig.json (Chantier 5)
├── next.config.js
├── package.json
├── tailwind.config.js
└── .prettierrc
```

---

## Les 6 chantiers — dans cet ordre (NUMÉROTATION CANONIQUE)

Cette numérotation est la référence unique pour tout le projet. Elle est identique dans `AUDIT_BEFORE.md` et dans `ROADMAP_REFACTO.md`.

| # | Chantier | Durée estimée | KPI principal |
|---|---|---|---|
| 1 | Contenu & UX | 3 jours | Bio à jour, projets 2026 visibles |
| 2 | Accessibilité | 2 jours | Lighthouse Accessibilité 100/100 |
| 3 | CLS | 3 jours | CLS desktop < 0.1 |
| 4 | Performance JS + Images | 5 jours | TBT mobile < 500 ms, JS inutilisé < 100 KB, images < 500 KB total |
| 5 | Migration TypeScript | 10 jours | 0 erreur `tsc --noEmit`, 100% des fichiers typés |
| 6 | Tests | 10 jours | Coverage > 80% |

---

### CHANTIER 1 — Contenu & UX : raconter la bonne histoire
**Priorité : FAIRE EN PREMIER**

Le site positionne encore Alexandre comme "développeur Salesforce Commerce Cloud".
C'est faux en 2026. Il est dev Full Stack IA, vibe coder, utilisateur quotidien de Claude Code.

**Tâches :**

1. `src/pages/index.js` — Réécrire la bio :
   - Titre h1 : garder "Alexandre Ribault"
   - Paragraphe accroche : dev Full Stack IA, vibe coding avec Claude Code, 3 apps livrées en production en 2026
   - Remplacer l'image `dream_developer.png` par `photo_Alex_R.jpg` (photo réelle)

2. `src/components/data/Projects.js` — Remplacer les projets tutos par les vrais projets 2026 :
   - **Dog Days** — Jeu 4X multijoueur web (Next.js 14, TypeScript, MongoDB, Redis) — 17 systèmes, **1 805 tests**, 28 routes API — lien GitHub
   - **Runova** — App Android Couch-to-5K gamifiée (React Native/Expo, Firebase, RevenueCat) — 6 phases en 14 jours
   - **Commis** — Assistant pâtisserie IA Android (Expo, Gemini Flash, SQLite) — scan IA de recettes, 4 langues, freemium — lien Google Play
   - Garder 1 ou 2 anciens projets si pertinent (alex-shop par exemple)

3. `src/pages/_document.js` — Corriger `lang="en"` → `lang="fr"`

4. `src/pages/index.js` — Corriger la faute : "acceuil" → "accueil"

5. `src/pages/api/hello.js` — Supprimer ce fichier (route morte)

6. `public/` — Mettre à jour `resume.pdf` avec le CV IA-first (à fournir par l'utilisateur)

7. `src/components/data/Skills.js` — Ajouter : Claude Code, Context Engineering, Agents IA, Gemini Flash, React Native/Expo, Firebase, Vitest

**Hors scope Chantier 1 :** la migration des images de `src/img/` vers `public/img/` ET leur compression sont traitées en **Chantier 4** (sujet purement performance).

**Critère de succès :** Le site déployé sur Vercel présente Alexandre comme dev Full Stack IA avec ses vrais projets 2026.

---

### CHANTIER 2 — Accessibilité : 89 → 100 (desktop), 94 → 100 (mobile)

**Problèmes identifiés par Lighthouse :**
- Boutons sans nom accessible (`aria-label` manquant) — desktop + mobile
- Liens sans nom discernable — desktop
- `lang="en"` au lieu de `lang="fr"` (déjà traité dans Chantier 1)

**Tâches :**

1. Identifier tous les boutons et liens icônes dans `NavBar.js`, `Logo.js`, `Footer.js`, `Icons.js`
2. Ajouter `aria-label` sur chaque élément concerné
3. Vérifier les attributs `alt` sur toutes les images `<Image />`
4. Vérifier le contraste des couleurs (mode clair + mode sombre) via l'outil intégré Lighthouse
5. Lancer `npm run lint` — zéro warning résiduel

**Critère de succès :** Accessibilité 100/100 Lighthouse desktop ET mobile.

---

### CHANTIER 3 — CLS : 0.431 → < 0.1 (desktop)

**Problème :** Cumulative Layout Shift à 0.431 sur desktop (seuil Google : < 0.1).
Les éléments bougent visuellement au chargement — pénalité SEO et UX.

**Tâches :**

1. Identifier les éléments responsables du layout shift :
   - Images sans dimensions explicites (width/height)
   - Fonts Google qui se chargent après le rendu initial (FOUT)
   - Éléments animés avec Framer Motion qui déplacent le layout
   - Composant `AnimatedText.js` — vérifier s'il cause du shift

2. Pour chaque image `<Image />` : s'assurer que `width` et `height` sont définis, ou que `fill` + conteneur dimensionné sont utilisés

3. Pour les fonts : vérifier `font-display: swap` dans la config Next.js font

4. Pour les animations : remplacer les animations qui déplacent le layout (`x`, `y`, `layout`) par des animations qui n'en causent pas (`opacity`, `scale`)

5. Re-mesurer le CLS avec Lighthouse après chaque correction

**Critère de succès :** CLS desktop < 0.1.

---

### CHANTIER 4 — Performance JS + Images

**Double sujet performance :** bundle JavaScript inutilisé (932 KB) + images non optimisées (3,5 MB total, dont photo_Alex_R.jpg à 1,4 MB). TBT mobile à 1 620 ms (seuil : < 200 ms).

#### Partie A — Performance JavaScript

1. Installer `@next/bundle-analyzer` et générer le rapport :
   ```bash
   npm install --save-dev @next/bundle-analyzer
   ANALYZE=true npm run build
   ```
   **Screenshot du treemap AVANT modification** (à pousser dans la conversation portfolio-refacto).

2. Identifier les imports Framer Motion dans tous les fichiers :
   ```bash
   grep -rn "framer-motion" src --include="*.js"
   ```

3. Passer aux imports granulaires :
   ```js
   // Avant (importe tout) :
   import { motion, AnimatePresence } from 'framer-motion'
   // Après (imports ciblés, tree-shakable) :
   import { motion } from 'framer-motion/dist/framer-motion'
   ```

4. Activer le dynamic import pour les composants non critiques au-dessus de la fold :
   ```js
   const AnimatedText = dynamic(() => import('../components/AnimatedText'), { ssr: false })
   ```

5. Vérifier `next.config.js` — activer `swcMinify: true` si pas déjà présent (ou équivalent Next.js 15 selon la version cible).

6. Régénérer le rapport bundle analyzer. **Screenshot APRÈS**.

#### Partie B — Migration et compression des images

7. Créer le dossier de destination :
   ```bash
   mkdir -p public/img
   ```

8. Déplacer toutes les images de `src/img/` vers `public/img/` :
   ```bash
   mv src/img/* public/img/
   rmdir src/img
   ```

9. Mettre à jour tous les imports dans le code :
   ```js
   // Avant :
   import profilePic from './../img/dream_developer.png'
   // Après (avec next/image depuis /public) :
   // Utiliser le chemin direct "/img/photo_Alex_R.jpg" dans src=
   ```

10. Compresser les images lourdes :
    - `photo_Alex_R.jpg` (1,4 MB) → cible < 200 KB (outil : sharp, squoosh.app, ou `npm i -D sharp-cli` + conversion WebP)
    - Supprimer `dream_developer.png` (406 KB) — remplacée par la vraie photo en Chantier 1
    - Convertir les autres JPG lourds en WebP (Hotel.jpg, News.jpg, Jungle.jpg)

11. Remplacer `favicon.ico` (39 KB) par un `.png` ou `.svg` 32×32 < 5 KB.

#### Mesure finale

12. Re-mesurer Lighthouse Performance + TBT (desktop + mobile) selon la méthodologie définie dans `AUDIT_BEFORE.md`.

**Critère de succès :** 
- TBT mobile < 500 ms
- Performance mobile > 85
- JS inutilisé < 100 KB
- Total images `public/img/` < 500 KB
- Photo principale < 200 KB

---

### CHANTIER 5 — Migration TypeScript : 0% → 100%

**Problème :** 25 fichiers `.js`, 0 typage, 14 composants sans PropTypes.

**Tâches :**

1. Installer TypeScript :
   ```bash
   npm install --save-dev typescript @types/react @types/node @types/react-dom
   ```

2. Créer `tsconfig.json` avec `strict: true` — config moderne 2026 :
   ```json
   {
     "compilerOptions": {
       "target": "es2022",
       "lib": ["dom", "dom.iterable", "esnext"],
       "allowJs": true,
       "skipLibCheck": true,
       "strict": true,
       "noEmit": true,
       "esModuleInterop": true,
       "module": "esnext",
       "moduleResolution": "bundler",
       "resolveJsonModule": true,
       "isolatedModules": true,
       "jsx": "preserve",
       "incremental": true,
       "paths": { "@/*": ["./*"] }
     },
     "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
     "exclude": ["node_modules"]
   }
   ```

3. Renommer les fichiers dans cet ordre (un par un, builder entre chaque) :
   - `src/styles/theme.js` → `theme.ts`
   - `src/components/hooks/useThemeSwitcher.js` → `useThemeSwitcher.ts`
   - `src/components/data/*.js` → `*.ts`
   - `src/components/*.js` → `*.tsx` (typer chaque prop)
   - `src/pages/*.js` → `*.tsx`

4. Pour chaque composant, typer les props avec une interface :
   ```tsx
   interface ProjectCardProps {
     title: string
     description: string
     img: StaticImageData
     link?: string
     github?: string
     type: string
   }
   ```

5. Supprimer `jsconfig.json` une fois `tsconfig.json` en place

6. Lancer `npx tsc --noEmit` — noter le nombre d'erreurs initial, corriger jusqu'à 0

7. `npm run build` doit passer en succès

**Critère de succès :** `npx tsc --noEmit` → 0 erreur. Tous les fichiers en `.ts` / `.tsx`.

---

### CHANTIER 6 — Tests : 0% → 80% de coverage

**Priorité : FAIRE EN DERNIER (sur code TypeScript propre)**

**Tâches :**

1. Installer Vitest + Testing Library :
   ```bash
   npm install --save-dev vitest @vitejs/plugin-react @testing-library/react @testing-library/jest-dom jsdom
   ```

2. Configurer `vitest.config.ts` :
   ```ts
   import { defineConfig } from 'vitest/config'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     test: {
       environment: 'jsdom',
       globals: true,
       setupFiles: './src/tests/setup.ts',
       coverage: {
         reporter: ['text', 'html'],
         exclude: ['node_modules/', 'src/pages/api/']
       }
     }
   })
   ```

3. Créer `src/tests/setup.ts` :
   ```ts
   import '@testing-library/jest-dom'
   ```

4. Ajouter dans `package.json` :
   ```json
   "test": "vitest",
   "test:coverage": "vitest run --coverage"
   ```

5. Écrire les tests composant par composant, dans cet ordre de priorité :
   - `AnimatedText` — rendu du texte lettre par lettre
   - `ProjectCard` — rendu titre, description, lien
   - `NavBar` — rendu des liens, toggle dark mode
   - `Footer` — rendu des liens sociaux avec aria-label
   - `Layout` — rendu du wrapper
   - `UnderlinedLink` — rendu du lien avec style
   - `Logo` — rendu du logo avec lien
   - `Skills` — rendu de la liste de compétences
   - `Technologies` — rendu des icônes techno
   - `Education` / `Experience` — rendu des items de timeline
   - `TransitionEffect` — présence de l'animation
   - `LiIcon` — rendu de l'icône de liste
   - `useThemeSwitcher` — hook : toggle dark/light

6. Lancer `npm run test:coverage` — noter le % initial et final

**Critère de succès :** Coverage > 80% sur lignes + fonctions + branches.

---

## Ce qu'il ne faut PAS changer

- La structure de routing Pages Router — pas de migration App Router
- La logique de dark mode (`useThemeSwitcher`) — elle fonctionne
- La palette de couleurs générale — rester dans l'identité visuelle actuelle
- Le système d'animation au scroll — le garder, juste optimiser les imports
- Le fichier `Icons.js` monolithique (425 lignes) — hors scope de cette refacto

---

## Commandes de référence

```bash
# Développement
npm run dev

# Build de vérification (doit toujours passer)
npm run build

# Lint
npm run lint

# TypeScript check (Chantier 5+)
npx tsc --noEmit

# Tests (Chantier 6)
npm run test
npm run test:coverage

# Bundle analyzer (Chantier 4)
ANALYZE=true npm run build
```

---

## KPIs à mesurer avant/après chaque chantier

Voir `AUDIT_BEFORE.md` pour la méthodologie de mesure Lighthouse — utiliser les MÊMES conditions pour chaque mesure "after" afin que les deltas soient valides.

| Chantier | KPI principal | Avant | Après (cible) |
|---|---|---|---|
| 1 — Contenu | Bio à jour, projets 2026 visibles | ❌ | ✅ |
| 2 — Accessibilité | Score Lighthouse Accessibilité | 89 / 94 | 100 / 100 |
| 3 — CLS | CLS desktop | 0.431 | < 0.1 |
| 4 — Perf JS + Images | TBT mobile / JS inutilisé / Images totales | 1 620 ms / 932 KB / 3,5 MB | < 500 ms / < 100 KB / < 500 KB |
| 5 — TypeScript | Erreurs `tsc --noEmit` | N/A | 0 |
| 6 — Tests | Coverage | 0% | > 80% |

---

*Dernière mise à jour : 17 avril 2026*
*Auteur : Alexandre Ribault — Refacto documentée pour LinkedIn*
