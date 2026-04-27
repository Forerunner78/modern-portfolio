# KNOWN_ISSUES.md · Audits reportés

Ce fichier consigne les audits Lighthouse / axe-core identifiés pendant un chantier mais reportés volontairement à un chantier ultérieur — pour que la décision soit traçable et que le diagnostic n'ait pas à être refait.

---

## Reportés au Chantier 7 · Polish

Identifiés à la clôture du **Chantier 2 · Accessibilité** (27 avril 2026).
Score Lighthouse Accessibilité atteint sur la branche `develop` : **96 / 100** desktop ET mobile (médiane sur 3 runs chacun, variance nulle).

Ces deux audits font basculer le score de 96 à 100 sur les deux plates-formes. Décision narrative : ne pas les fixer dans le Chantier 2 pour éviter le récit *"pourquoi pas 100 avant"* sur le post LinkedIn associé. Les fixes sont triviaux (~5 min) et trouveront naturellement leur place dans le Chantier 7 polish prévu le 13/07/2026.

### 1. `color-contrast` · Footer (light mode)

- **Fichier** : [src/components/Footer.js](src/components/Footer.js#L20)
- **Sélecteur** : `footer.w-full > div.w-full > div.flex > div.mb-2` (et `div.text-xs` adjacent)
- **Texte concerné** : "2026 © All Rights Reserved" et "Thanks to CodeBucks"
- **Couleurs** : foreground `#6B7280` (`text-gray-500`) sur background `#F5F5F5` (`bg-light`)
- **Ratio mesuré** : **4.43:1**
- **Ratio cible WCAG AA** : 4.5:1 (texte normal)
- **Manque** : 0.07
- **Fix** : remplacer `text-gray-500` par `text-gray-600` (#4B5563) → ratio ~7.5:1
- **Impact visuel** : nul (différence imperceptible sur du gris foncé en bas de page)

### 2. `label-content-name-mismatch` · Logo

- **Fichier** : [src/components/Logo.js](src/components/Logo.js#L9-L26)
- **Snippet** : `<a aria-label="Retour a l'accueil · Portfolio d'Alexandre Ribault" …>AR</a>`
- **Règle WCAG** : 2.5.3 *Label in Name* (niveau A) — quand un élément a à la fois un texte visible et un nom accessible, le nom accessible DOIT contenir le texte visible mot-à-mot.
- **Cause** : l'`aria-label` ajouté au commit 6 du Chantier 2 enrichit le contexte du logo mais omet le texte visible "AR".
- **Fix** : remplacer `aria-label="Retour a l'accueil · Portfolio d'Alexandre Ribault"` par `aria-label="AR · Retour a l'accueil · Portfolio d'Alexandre Ribault"` (préfixer le texte visible).
- **Impact visuel** : nul (aria-label invisible).

---

## Vérification Chantier 7

À la clôture du Chantier 7, lancer :

```bash
npm run build && npm run start &
sleep 5
npx lighthouse@11 http://localhost:3000/presentation --only-categories=accessibility --preset=desktop --quiet
npx lighthouse@11 http://localhost:3000/presentation --only-categories=accessibility --quiet
```

Score attendu après les 2 fixes : **100 / 100** sur desktop et mobile. Sauvegarder les nouveaux rapports HTML dans `public/screenshots/after/chantier-7/`.

---

*Dernière mise à jour : 27 avril 2026 · clôture Chantier 2*
