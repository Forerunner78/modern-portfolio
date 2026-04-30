# modern-portfolio

[![CI](https://github.com/Forerunner78/modern-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/Forerunner78/modern-portfolio/actions/workflows/ci.yml)

Portfolio développeur Full Stack IA — Alexandre Ribault.

**Production** : [modern-portfolio-alexandre-ribault.vercel.app](https://modern-portfolio-alexandre-ribault.vercel.app)

## Stack

- **Framework** : Next.js 13 (App Router)
- **Langage** : TypeScript strict (noUncheckedIndexedAccess, exactOptionalPropertyTypes)
- **Style** : Tailwind CSS
- **Animations** : Framer Motion
- **Linting** : ESLint + @typescript-eslint/recommended
- **Formatting** : Prettier (singleQuote, tabWidth 2, trailingComma all)
- **Hooks** : Husky + lint-staged (pre-commit), npm run build (pre-push)
- **CI** : GitHub Actions (lint → tsc → build)

## Scripts

```bash
npm run dev        # Serveur de développement (localhost:3000)
npm run build      # Build de production
npm run start      # Démarrer le build de production
npm run lint       # ESLint sur tout le projet
npm run format     # Prettier --write (formatage complet)
npm run format:check  # Prettier --check (vérification sans écriture)
```

## Installation

```bash
npm install
npm run dev
```
