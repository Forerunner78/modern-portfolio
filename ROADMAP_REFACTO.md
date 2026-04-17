# Roadmap — Refacto Portfolio avec Claude Code
## Vision complète : chantiers × posts LinkedIn × captures

---

## Numérotation canonique des chantiers

Cette numérotation est la référence unique pour tout le projet.
Elle est identique dans `CLAUDE.md` et `AUDIT_BEFORE.md`.

| # | Chantier | Durée estimée |
|---|---|---|
| 1 | Contenu & UX | 3 jours |
| 2 | Accessibilité | 2 jours |
| 3 | CLS | 3 jours |
| 4 | Performance JS + Images | 5 jours |
| 5 | Migration TypeScript | 10 jours |
| 6 | Tests | 10 jours |

**Ordre d'exécution = ordre de numérotation.** On fait 1 puis 2 puis 3 puis 4 puis 5 puis 6.
On ne saute pas de chantier. On ne revient pas en arrière sans raison majeure.

---

## Les 6 chantiers et leur post LinkedIn associé

---

### Chantier 1 — Contenu & UX : raconter la bonne histoire
**Problème :** Le site dit encore "développeur Salesforce Commerce Cloud". Ni Claude Code, ni IA, ni vibe coding. Les projets affichés (Marvel, Hotel, etc.) sont des projets tutos. Dog Days, Runova et Commis n'existent pas sur le portfolio.

**Solution Claude Code + toi :**
- Réécrire la bio homepage : dev Full Stack IA, vibe coder, Claude Code quotidien
- Remplacer les projets tutos par Dog Days, Runova, Commis (avec screenshots et liens)
- Ajouter une section "Stack" mise à jour
- Corriger `lang="en"` → `lang="fr"`
- Corriger la faute "acceuil"
- Ajouter les liens vers GitHub et les apps déployées

**Résultat attendu :** Un portfolio qui te représente en 2026, pas en 2023.

**Post LinkedIn associé — "L'aveu"**
- Pilier : Recherche d'emploi / Réflexions
- Angle : j'avais un portfolio qui sabotait ma recherche d'emploi sans que je m'en rende compte
- Hook : *"Mon portfolio disait que j'étais développeur SFCC. Je cherche un poste IA. Pendant 6 mois."*
- Corps : la découverte (le texte de la homepage vs ce que je suis aujourd'hui), ce qu'on a changé, le avant/après visuel, ce que ça dit sur l'importance d'aligner son image pro avec sa réalité
- Ce qui rend ce post populaire : **l'honnêteté désarmante**. Tout le monde a un LinkedIn ou un portfolio qui ment par omission. Ce post touche une corde profonde.
- Format visuel : screenshot homepage AVANT (bio SFCC) / APRÈS (bio IA + vibe coding) côte à côte

---

### Chantier 2 — Accessibilité : 89 → 100 (desktop)
**Problème :** Boutons et liens sans nom accessible. Navigateurs vocaux ne peuvent pas interpréter la NavBar. `lang="en"` sur un site français (déjà traité en Chantier 1).

**Solution Claude Code :** Audit axe, ajout des `aria-label` manquants sur toutes les icônes, vérification du contraste des couleurs.

**Résultat attendu :** Accessibilité 100/100 desktop et mobile.

**Post LinkedIn associé — "Ce que je ne savais pas"**
- Pilier : Réflexions
- Angle : l'accessibilité web n'est pas un sujet de spécialiste, c'est une responsabilité de base
- Hook : *"Les icônes de ma navbar n'avaient aucun nom. Pour un lecteur d'écran, elles n'existaient pas."*
- Corps : explication simple de ce qu'est un aria-label, pourquoi ça compte, combien de temps Claude Code a mis pour tout corriger (spoiler : quelques minutes), le score 89 → 100
- Ce qui rend ce post populaire : **l'accessibilité est sous-représentée dans les posts dev** mais très appréciée par les recruteurs et les DSI. Ton regard de docteur (rigueur, éthique) se prête parfaitement à ce sujet.
- Format visuel : screenshot du rapport axe avant/après

---

### Chantier 3 — CLS desktop : 0.431 → < 0.1
**Problème :** Layout shift massif au chargement sur desktop (4× au-dessus du seuil Google). Les éléments bougent visuellement, ça nuit au SEO et à l'expérience.

**Solution Claude Code :** Identifier les éléments qui causent le shift (images sans dimensions, fonts, animations), ajouter les attributs manquants, stabiliser le layout.

**Résultat attendu :** CLS < 0.1, gain SEO mesurable.

**Post LinkedIn associé — "Le bug invisible"**
- Pilier : IA & Vibe Coding / Réflexions
- Angle : j'avais un bug que je ne voyais pas — l'IA l'a nommé
- Hook : *"Mon portfolio avait un bug que Google voyait. Moi non."*
- Corps : explication du CLS en langage humain (les éléments qui bougent au chargement), comment Claude Code a identifié les coupables, ce qu'on a changé, avant/après filmé en GIF
- Ce qui rend ce post populaire : **le CLS est méconnu** mais c'est un Core Web Vital qui impacte directement le référencement. Beaucoup de devs ne savent pas ce que c'est — ce post leur apprend quelque chose d'utile.
- Format visuel : GIF du layout shift + score 0.431 → X.XXX

---

### Chantier 4 — Performance JS + Images
**Problème :** 
- 932 KB de JS inutilisé (Framer Motion importé en entier)
- 3,5 MB d'images non optimisées (photo principale à 1,4 MB)
- TBT mobile à 1 620 ms (8× au-dessus du seuil)

**Solution Claude Code :** Partie A — imports granulaires Framer Motion, tree-shaking Next.js, dynamic imports pour composants non critiques. Partie B — migration `src/img/` vers `public/img/`, compression en WebP, remplacement du favicon.

**Résultat attendu :** TBT mobile < 500 ms, Performance mobile > 85, images totales < 500 KB.

**Post LinkedIn associé — "Le chiffre brutal"**
- Pilier : IA & Vibe Coding
- Angle : un seul problème, un chiffre qui claque, une solution précise
- Hook : *"932 KB de JavaScript. 3,5 MB d'images. Sur un portfolio de 3 pages."*
- Corps : j'ai lancé Lighthouse, j'ai vu les chiffres, j'ai demandé à Claude Code de trouver l'origine exacte, il a identifié Framer Motion importé en entier + les images dans /src au lieu de /public, on corrige, TBT divisé par X
- Ce qui rend ce post populaire : **tout le monde a du JS inutile et des images trop lourdes**. C'est le problème le plus répandu du web. Ce post va toucher chaque dev front qui lit LinkedIn.
- Format visuel : tableau avant/après TBT + Performance score + poids total images

---

### Chantier 5 — Migration TypeScript : 0% → 100%
**Problème :** 25 fichiers JS, 0 typage, 14 composants sans PropTypes. Aucun filet de sécurité à la compilation.

**Solution Claude Code :** Migration automatisée fichier par fichier, activation de `strict: true`, typage de toutes les props et fonctions, détection des erreurs silencieuses.

**Résultat attendu :** 0 erreur `tsc --noEmit`, TypeScript strict activé.

**Post LinkedIn associé — "La méthode"**
- Pilier : IA & Vibe Coding (éducatif — candidat Lead Magnet)
- Angle : comment on organise une migration TypeScript avec Claude Code sans casser le projet
- Hook : *"25 fichiers JavaScript. Migrés en TypeScript strict. Voici la méthode exacte."*
- Corps : le CLAUDE.md qu'on a écrit, le découpage en agents par fichier, les erreurs que TypeScript a révélées que JS cachait silencieusement, le nombre exact d'erreurs trouvées
- Ce qui rend ce post populaire : **la migration TypeScript fait peur** à beaucoup de devs. Un post qui dit "c'est faisable avec Claude Code + voici comment" est une ressource concrète.
- Lead Magnet : ton CLAUDE.md de migration en DM
- Format visuel : screenshot avant (fichier .js) / après (fichier .tsx avec types)

---

### Chantier 6 — Tests : 0% → 80% de coverage
**Problème :** 0 fichier de test, 0% de coverage sur 14 composants.

**Solution Claude Code :** Configuration Vitest + Testing Library, génération des tests unitaires composant par composant, validation du comportement attendu.

**Résultat attendu :** 14 composants testés, > 80% de coverage.

**Post LinkedIn associé — "Le delta"**
- Pilier : Projets / IA & Vibe Coding
- Angle : le chiffre le plus spectaculaire de la série — 0% à 80%
- Hook : *"0 test. 14 composants. J'ai demandé à Claude Code d'écrire les tests. Il en a écrit X."*
- Corps : la vraie histoire — pourquoi je n'avais pas de tests (projet tutoriel, jamais refactorisé), comment on a configuré Vitest, les bugs que les tests ont révélés que le code cachait, le sentiment de sécurité que ça apporte maintenant
- Ce qui rend ce post populaire : **la culpabilité du "je ferai les tests plus tard"** est universelle. Ce post ne juge pas, il montre une sortie. Très fort en identification.
- Format visuel : screenshot du rapport de coverage avant/après

---

## Ordre de publication LinkedIn

L'ordre de publication suit le **calendrier Google Calendar validé** (22 posts sur 11 semaines, 2 posts/semaine : mardi long + vendredi signal court).

Les posts projet (mardi) sont publiés **5 à 7 jours après le merge** du chantier correspondant. Cela laisse le temps de capturer les métriques stabilisées et de rédiger le post à froid.

| Semaine | Mardi (post long) | Vendredi (signal court) |
|---|---|---|
| S3 (mai 5-8) | L1 — "L'aveu" (Chantier 1) | S1 — 11 fichiers Framer Motion |
| S4 (mai 12-15) | L2 — Breather vibe coding | S2 — Retour Claude Code S2 |
| S5 (mai 19-22) | L3 — "Ce que je ne savais pas" (Chantier 2) | S3 — Accessibilité 89→100 |
| S6 (mai 26-29) | L4 — Breather workflow Claude Code | S4 — Observation délégation |
| S7 (juin 2-5) | L5 — "Le bug invisible" (Chantier 3) | S5 — Avant/après CLS |
| S8 (juin 9-12) | L6 — Breather solo dev économie | S6 — 932 KB JS inutilisé |
| S9 (juin 16-19) | L7 — "Le chiffre brutal" (Chantier 4) | S7 — Migration TS S1/2 |
| S10 (juin 23-26) | L8 — Breather prompt parfait | S8 — TS erreur récurrente |
| S11 (juin 30 - juil 3) | L9 — "La méthode" TS (Chantier 5) — Lead Magnet | S9 — Ce que les tests changent |
| S12 (juil 7-10) | L10 — Breather tests en 2026 | S10 — Coverage 0→80% |
| S13 (juil 14-17) | L11 — "Le delta" (Chantier 6) ⚠️ férié | S11 — Bilan 6 chantiers |

**Logique de l'ordre :**
- On ouvre avec "L'aveu" (Chantier 1 Contenu) parce que c'est le post le plus humain et qu'il crée du lien avant les posts techniques
- Les posts projet alternent avec des breathers (vibe coding, workflow, économie, etc.) pour laisser respirer le feed
- Les signaux du vendredi prolongent le post du mardi ou apportent un chiffre nouveau
- Le Lead Magnet (Chantier 5 TS) arrive en S11, au moment où l'audience est chauffée depuis 8 semaines
- Le delta Tests (Chantier 6) clôt la série avec le chiffre le plus spectaculaire (0% → 80%)

**Conflit férié à gérer :** Le Post L11 (mardi 14/07) tombe sur Bastille Day. Recommandation : décaler au mercredi 15/07 09h pour ne pas brûler le post de clôture de série.

---

## Piliers LinkedIn

Les posts de la série se répartissent sur 4 piliers d'autorité :

- **IA & Vibe Coding** : Chantiers 3, 4, 5 + breathers workflow Claude Code / prompt parfait / tests 2026
- **Projets** : Chantier 6 + breather solo dev économie
- **Recherche d'emploi / Réflexions** : Chantier 1 (L'aveu) + Chantier 2 (Ce que je ne savais pas) + breather vibe coding
- **Observations** : les signaux courts du vendredi

---

## Ordre de réalisation des chantiers

| # | Chantier | Raison de cet ordre |
|---|---|---|
| 1 | Contenu & UX | Faire en premier pour que le portfolio soit à jour dès le premier déploiement. Ne dépend d'aucun autre chantier. |
| 2 | Accessibilité | Rapide, non-risqué, base propre pour la suite. Zero interaction avec le code structurel. |
| 3 | CLS | Stabiliser le layout avant d'optimiser le JS — certaines corrections CLS (dimensions d'images, animations) pourraient être défaites si on optimise le JS avant. |
| 4 | Perf JS + Images | Le plus impactant techniquement. Vient après CLS pour ne pas casser la stabilité du layout. |
| 5 | TypeScript | Migration globale qui nécessite que le code soit stable et performant. Typer du code qui va changer = travail à refaire. |
| 6 | Tests | En dernier, sur un code TypeScript propre. Les tests bénéficient des types (Testing Library + TS = meilleur DX). |

---

## Screenshots "before" — matériau visuel des posts

Les 8 screenshots sont à copier dans `public/screenshots/before/` du repo avant le premier commit de refacto. Cela les rend versionnés et publics (via l'URL Vercel).

1. Terminal `grep -rn "framer-motion" src` → 11 fichiers
2. Homepage desktop — bio SFCC visible
3. Homepage mobile — 390px
4. `Icons.js` ouvert — 425 lignes
5. NavBar zoomée — 4 icônes sans aria-label
6. `package.json` — Next.js 13.3.0, aucun script test
7. Page Projets — vieux projets tutos
8. Terminal `find . -name "*.test.*"` → vide

**Pour chaque chantier qui impacte un KPI visible** (chantiers 2, 3, 4), capturer un screenshot "after" dans `public/screenshots/after/chantier-N/` après le merge. Cela donne le matériau visuel des posts LinkedIn correspondants.

---

## Ce qu'on fait maintenant

**Avant lundi 20 avril (démarrage Chantier 1) :**

1. Remplacer les 3 docs à la racine du repo (`CLAUDE.md`, `AUDIT_BEFORE.md`, `ROADMAP_REFACTO.md`) par les versions corrigées
2. Créer le dossier `public/screenshots/before/` et y copier les 8 screenshots
3. Committer le tout avec un message clair du type `docs: setup refacto portfolio avec Claude Code (chantiers 1-6)`

**Lundi 20 avril 09h (démarrage Chantier 1) :**

1. Ouvrir Claude Code dans `/modern-portfolio`
2. Envoyer le prompt : "Lis CLAUDE.md, AUDIT_BEFORE.md et ROADMAP_REFACTO.md. Commence par le Chantier 1. Attends ma validation avant de passer au Chantier 2."

---

*Dernière mise à jour : 17 avril 2026*
*Aligné avec le calendrier Google Calendar ARDigital — Roadmap (22 posts LinkedIn, 11 semaines)*
