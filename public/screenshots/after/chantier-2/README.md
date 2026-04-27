# Lighthouse · Chantier 2 · Configuration de mesure

Ce dossier contient les rapports Lighthouse générés à la clôture du **Chantier 2 · Accessibilité** (27 avril 2026, branche `develop` avant merge sur `main`).

Ces mesures sont des **validations pré-merge en local prod**. Les mesures officielles "after Chantier 2" pour la documentation et le post LinkedIn doivent être faites en PSI sur la prod Vercel après merge, selon la méthodologie d'AUDIT_BEFORE.md.

---

## Configuration exacte utilisée

| Paramètre | Valeur |
|---|---|
| Outil | Lighthouse CLI |
| Version Lighthouse | **11.7.1** (via `npx --yes lighthouse@11`) |
| Mode build | Production (`npm run build && npm run start`) |
| URL testée | `http://localhost:3000/presentation` |
| Page choisie | `/presentation` (page la plus dense en composants : Skills, Education, Experience, NavBar, Footer) |
| Catégorie | `accessibility` uniquement (`--only-categories=accessibility`) |
| Chrome | `chrome.exe` (auto-détecté) `C:/Program Files (x86)/Google/Chrome/Application/chrome.exe` |
| Flags Chrome | `--headless=new --no-sandbox` |
| Preset desktop | `--preset=desktop` (1350×940, no throttling) |
| Preset mobile | défaut Lighthouse mobile (412×823 Moto G Power, slow 4G + CPU 4× slowdown) |
| Nombre de runs | 3 par plate-forme |
| Format de sortie | HTML + JSON simultanés (`--output=html --output=json`) |

## Commandes exactes

```bash
# 1. Build prod et serveur en background
npm run build
npm run start &
sleep 5

# 2. 3 runs desktop
for i in 1 2 3; do
  npx --yes lighthouse@11 http://localhost:3000/presentation \
    --only-categories=accessibility \
    --preset=desktop \
    --quiet \
    --chrome-flags="--headless=new --no-sandbox" \
    --output=html --output=json \
    --output-path="public/screenshots/after/chantier-2/desktop-run-$i"
  sleep 2
done

# 3. 3 runs mobile (preset par défaut)
for i in 1 2 3; do
  npx --yes lighthouse@11 http://localhost:3000/presentation \
    --only-categories=accessibility \
    --quiet \
    --chrome-flags="--headless=new --no-sandbox" \
    --output=html --output=json \
    --output-path="public/screenshots/after/chantier-2/mobile-run-$i"
  sleep 2
done
```

## Résultats

| Plate-forme | Run 1 | Run 2 | Run 3 | Médiane |
|---|---|---|---|---|
| Desktop | 96 | 96 | 96 | **96** |
| Mobile | 96 | 96 | 96 | **96** |

Variance nulle (audit a11y déterministe basé sur axe-core).

## Audits restants (reportés au Chantier 7)

Voir [/KNOWN_ISSUES.md](../../../../KNOWN_ISSUES.md) à la racine du repo.

---

*Dernière mise à jour : 27 avril 2026 · clôture Chantier 2*
