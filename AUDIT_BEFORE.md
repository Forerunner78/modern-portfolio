# Audit BEFORE · modern-portfolio · Avril 2026

> Baseline avant refacto Claude Code.
> Document de référence pour le contenu LinkedIn "avant/après".

---

## 🔬 Méthodologie de mesure

**Toutes les mesures "after" doivent être effectuées dans EXACTEMENT les mêmes conditions pour que les deltas soient valides et crédibles publiquement.**

### Lighthouse

| Paramètre | Valeur |
|---|---|
| URL testée | `https://modern-portfolio-alexandre-ribault.vercel.app` (production Vercel) |
| Date de la mesure "before" | 14 avril 2026 |
| Modes testés | Desktop + Mobile (2 rapports séparés) |
| Throttling | Valeurs par défaut Lighthouse (Simulated Slow 4G + CPU 4× slowdown en mobile) |
| Viewport | Défaut Lighthouse · desktop 1350×940 / mobile 412×823 (Moto G Power) |
| Navigateur | Chrome dernière version stable |
| Mode navigation | Mode incognito (par défaut lors d'un test Lighthouse depuis DevTools) |
| Catégories mesurées | Performance, Accessibilité, Bonnes pratiques, SEO |

> ⚠️ **Hypothèse sur les paramètres** : les valeurs ci-dessus correspondent aux réglages par défaut de Lighthouse (onglet DevTools > Lighthouse). Si la re-mesure "after" du Chantier 1 donne des scores radicalement différents sans changement correspondant, re-mesurer le "before" dans les conditions exactes actuelles avant de publier tout post LinkedIn comparatif.

### Protocole de re-mesure après chaque chantier

Pour chaque chantier qui impacte des KPIs Lighthouse (chantiers 2, 3, 4) :

1. Déployer sur Vercel et attendre que le build soit terminé
2. Ouvrir Chrome en mode incognito
3. DevTools (F12) > onglet Lighthouse
4. Mode : Navigation | Device : Desktop (puis refaire en Mobile) | Catégories : toutes
5. **Lancer 3 fois** et prendre la médiane (Lighthouse varie de ±3 points entre runs)
6. Screenshot des 2 rapports (desktop + mobile) · les sauvegarder dans `public/screenshots/after/chantier-N/`
7. Reporter les chiffres dans le tableau correspondant ci-dessous

---

## 📸 Screenshots "before"

Les 8 screenshots "before" sont dans le dossier local :
`D:\Utilisateurs\Alex\Documents\ALEX\Projet Refonte Portfolio\modern-portfolio\public\screenshots\`

**À faire avant le Chantier 1** : créer la structure `public/screenshots/before/` dans le repo, y copier les 8 screenshots, commiter. Cela les rend versionnés et référençables dans les posts LinkedIn.

Liste :
1. Terminal `grep -rn "framer-motion" src` → 11 fichiers importent Framer Motion
2. Homepage desktop · bio "Développeur spécialisé en Salesforce Commerce Cloud" visible
3. Homepage mobile · 390px
4. `Icons.js` ouvert dans VS Code · 425 lignes visibles
5. NavBar zoomée · 4 icônes sans aria-label
6. `package.json` · Next.js 13.3.0, aucun script `test`
7. Page Projets · vieux projets tutos (Alex Shop, etc.)
8. Terminal `find . -name "*.test.*"` → "Fichier introuvable"

---

## ⚡ Lighthouse & Core Web Vitals · Capturé le 14 avril 2026

### Desktop
| Métrique | Score AVANT | Score APRÈS |
|---|---|---|
| Performance | **74** /100 | |
| Accessibilité | **89** /100 | |
| Bonnes pratiques | 100 /100 | |
| SEO | 100 /100 | |
| FCP | 0.4 s | |
| LCP | 0.6 s | |
| TBT | 190 ms | |
| CLS | 🔴 **0.431** | |
| Speed Index | 1.2 s | |

### Mobile
| Métrique | Score AVANT | Score APRÈS |
|---|---|---|
| Performance | **72** /100 | |
| Accessibilité | **94** /100 | |
| Bonnes pratiques | 100 /100 | |
| SEO | 100 /100 | |
| FCP | 1.4 s | |
| LCP | 1.6 s | |
| TBT | 🔴 **1 620 ms** | |
| CLS | 0.06 | |
| Speed Index | 2.2 s | |

### Problèmes critiques identifiés par Lighthouse
- 🔴 **932 KB de JavaScript inutilisé** · le chiffre le plus impactant
- 🟡 51 KB de JavaScript non minifié
- 🔴 **CLS desktop à 0.431** · seuil acceptable : < 0.1 (soit 4× trop élevé)
- 🔴 **TBT mobile : 1 620 ms** · seuil acceptable : < 200 ms (soit 8× trop élevé)
- 🔴 Boutons sans nom accessible (desktop + mobile)
- 🔴 Liens sans nom accessible (desktop)

---

## 📦 Stack & Versions

| Élément | Version actuelle | Version cible |
|---|---|---|
| Next.js | **13.3.0** | **15.x** |
| React | 18.2.0 | 18.x (ou 19.x si compatible) |
| TailwindCSS | 3.3.1 | 3.x |
| Framer Motion | ^10.11.2 | imports granulaires |
| TypeScript | **ABSENT** | **strict mode activé** |
| Router | Pages Router | Pages Router (maintenu) |

**Dette de version : Next.js a 2 majeures de retard.** Saut direct 13 → 15 planifié.

---

## 🗂️ Structure du code

| Métrique | Valeur AVANT | Valeur APRÈS |
|---|---|---|
| Fichiers totaux | 39 | |
| Fichiers JS | 25 | |
| Lignes de code totales | **1 906** | |
| Composants | 14 | |
| Pages | 3 (index, presentation, projets) | |
| TypeScript | **0%** | |
| Fichiers de test | **0** | |
| Coverage tests | **0%** | |
| PropTypes | **0 composant** | |

---

## 🖼️ Images · Problèmes critiques

| Fichier | Taille | Problème |
|---|---|---|
| photo_Alex_R.jpg | **1,4 MB** | Non compressée, dans /src/img |
| dream_developer.png | **406 KB** | PNG non optimisé (à supprimer en Chantier 1) |
| Hotel.jpg | 287 KB | Non compressée |
| News.jpg | 284 KB | Non compressée |
| Jungle.jpg | 250 KB | Non compressée |
| favicon.ico | **39 KB** | Énorme pour un favicon (standard : <5 KB) |
| **Total /src/img** | **3,5 MB** | |

**Problème d'architecture** : toutes les images sont dans `/src/img/` au lieu de `/public/`.
Elles sont importées via `next/image` (bon point) mais les fichiers source sont lourds.

---

## 🔍 SEO & Metadata

| Point | Status AVANT |
|---|---|
| `<title>` par page | ✅ Présent (mais faible) |
| `<meta description>` | ✅ Présent (mais générique) |
| `og:title` | ✅ Présent |
| `og:description` | ✅ Présent |
| `og:image` | ❌ **ABSENT** |
| `sitemap.xml` | ❌ **ABSENT** |
| `robots.txt` | ❌ **ABSENT** |
| `lang=` dans HTML | ⚠️ `lang="en"` alors que le site est **en français** |
| Canonical URL | ❌ Absent |

**Contenu SEO faible détecté :**
- Title homepage : *"Page d'acceuil PortFolio d'Alexandre Ribault"* → **faute d'orthographe** ("acceuil" au lieu de "accueil")
- Description : *"Portfolio d'Alexandre Ribault généré par NextJs"* → aucune valeur SEO
- Accroche homepage : toujours positionné comme dev SFCC, **ne mentionne pas IA / Claude Code / vibe coding**

---

## ♿ Accessibilité · Problèmes identifiés statiquement

| Point | Status AVANT |
|---|---|
| `alt` sur images next/image | ✅ Présents |
| `aria-label` sur liens | ⚠️ Partiel (1 exemple trouvé) |
| `lang=` correct | ❌ "en" au lieu de "fr" |
| Contraste couleurs | À vérifier avec axe DevTools |
| Navigation clavier | À tester manuellement |

---

## 🧹 Qualité du code · Dettes identifiées

| Dette | Détail | Chantier associé |
|---|---|---|
| **0% TypeScript** | jsconfig.json uniquement, aucun .ts/.tsx | Chantier 5 |
| **0 test** | Aucun fichier .test.js ou .spec.js | Chantier 6 |
| **0 PropTypes** | 14 composants sans typage des props | Chantier 5 |
| **API route morte** | `/pages/api/hello.js` jamais utilisée | Chantier 1 |
| **Icons.js monolithique** | 425 lignes, toutes les SVG dans 1 fichier | Hors scope |
| **NavBar.js trop long** | 210 lignes, mélange logique + rendu | Chantier 2 (partiel, aria-labels) |
| **theme.js custom** | Styles centralisés dans un fichier JS au lieu de tailwind.config | Hors scope |
| **Contenu obsolète** | Bio SFCC uniquement, pas de mention IA/vibe coding | Chantier 1 |
| **Typo dans title** | "acceuil" → "accueil" | Chantier 1 |

---

## 📋 Les 6 chantiers · numérotation canonique

Cette numérotation est identique dans `CLAUDE.md` et `ROADMAP_REFACTO.md`.

### Chantier 1 · Contenu & UX
- Réécrire la bio homepage (SFCC → dev Full Stack IA, vibe coding)
- Remplacer les projets tutos par Dog Days, Runova, Commis
- Corriger `lang="en"` → `lang="fr"` dans _document
- Corriger la faute "acceuil" → "accueil"
- Supprimer `api/hello.js`
- Mettre à jour `resume.pdf`
- Mettre à jour `Skills.js` (Claude Code, Gemini Flash, etc.)

### Chantier 2 · Accessibilité
- Identifier et ajouter les `aria-label` manquants sur boutons et liens icônes
- Vérifier les attributs `alt` sur toutes les images
- Vérifier le contraste des couleurs (mode clair + sombre)
- Lancer `npm run lint` zéro warning

### Chantier 3 · CLS
- Identifier les éléments causant du layout shift (images sans dimensions, fonts, animations)
- Ajouter `width`/`height` explicites sur toutes les images
- Vérifier `font-display: swap`
- Remplacer les animations qui déplacent le layout par des animations en `opacity`/`scale`

### Chantier 4 · Performance JS + Images
**Partie A - JavaScript :**
- Installer `@next/bundle-analyzer`, screenshot treemap avant/après
- Imports granulaires de Framer Motion
- Dynamic imports pour composants non critiques
- Vérifier la minification SWC

**Partie B - Images :**
- Migration `src/img/` → `public/img/`
- Compression `photo_Alex_R.jpg` (1,4 MB → <200 KB)
- Conversion JPG en WebP
- Remplacement favicon.ico (39 KB → <5 KB)
- Suppression `dream_developer.png`

### Chantier 5 · Migration TypeScript
- Installer TypeScript + types Next.js/React
- Créer `tsconfig.json` strict (target es2022)
- Renommer 25 fichiers `.js` → `.ts/.tsx` un par un
- Typer chaque prop de composant via une interface
- Atteindre 0 erreur sur `npx tsc --noEmit`

### Chantier 6 · Tests
- Configurer Vitest + Testing Library + jsdom
- Écrire les tests des 14 composants
- Cible : > 80% de coverage (lignes + fonctions + branches)

---

## 🎯 Chiffres à capturer pour les posts LinkedIn

**Avant refacto · chiffres définitifs :**
- Performance desktop : **74/100** · mobile : **72/100**
- Accessibilité desktop : **89/100** · mobile : 94/100
- CLS desktop : **0.431** (4× au-dessus du seuil acceptable)
- TBT mobile : **1 620 ms** (8× au-dessus du seuil acceptable)
- JavaScript inutilisé : **932 KB**
- JavaScript non minifié : **51 KB**
- Lignes de code : **1 906**
- Fichiers : **39** (dont 25 JS)
- TypeScript : **0%**
- Tests : **0 fichier / 0% coverage**
- Images : **3,5 MB** stockées dans /src/img
- Photo principale : **1,4 MB**
- Favicon : **39 KB** (devrait être < 5 KB)
- og:image : **absent** sur toutes les pages
- sitemap.xml : **absent**
- robots.txt : **absent**
- Faute dans le `<title>` homepage : **"acceuil"**
- Composants sans typage : **14/14**
- Next.js : **13.3.0** (2 majeures de retard)
- Boutons/liens sans nom accessible : **présents** (desktop + mobile)

**Après refacto (objectifs) :**
- Lighthouse Performance : > 85 mobile, > 90 desktop
- Lighthouse Accessibilité : 100 / 100
- CLS desktop : < 0.1
- TBT mobile : < 500 ms
- JS inutilisé : < 100 KB
- TypeScript : 100%
- Tests : > 80% coverage
- Images totales : < 500 KB
- Photo principale : < 200 KB
- favicon : < 5 KB

---

*Généré le 14 avril 2026 · Mis à jour le 17 avril 2026 (méthodologie + harmonisation numérotation)*
