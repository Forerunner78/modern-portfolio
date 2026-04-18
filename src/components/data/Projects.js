import AlexShopEcommerce from "./../../img/Alex_Shop_Ecommerce.jpg";
import DogDays from "./../../img/dogdays/HQ_preview_lvl3.png";
import Runova from "./../../img/runova/Screenshot_20260403_093659_Runova Couch to 5K.jpg";
import Commis from "./../../img/commis/Screenshot_20260409_210544_Commis.jpg";

export const projects = {
    collaborations: [
        {
            name: "AR Digital",
            time: "févr. 2026 - présent",
            projects: ["Dog Days", "Commis", "Runova"],
            position: "Fondateur · Développeur Full Stack IA",
            company: "AR Digital",
            address: "Paris · Indépendant",
            work:
                "Création d'AR Digital — structure indépendante dédiée au développement produit piloté par IA. Cycle produit complet mené en solo avec Claude Code : étude de marché, PRD, CLAUDE.md, skills custom, développement et déploiement. Trois applications livrées from scratch — Dog Days (jeu 4X multijoueur web NextJS/MongoDB/Redis, 1 200+ tests), Commis (assistant pâtisserie IA Android React Native/Gemini Flash) et Runova (Couch-to-5K gamifiée Expo/Firebase, livrée en 14 jours). Orchestration d'agents IA, context engineering avancé, TDD strict.",
        },
        {
            name: "MADAGENCE",
            time: "sept. 2023 - juin 2025 · 1 an 10 mois",
            projects: ["Sisley", "Neuraé", "Haribo"],
            position: "Développeur Full Stack JavaScript et IA",
            company: "MADAGENCE",
            companyLink: "https://www.madagence.com",
            address: "Orléans · À distance",
            work:
                "Intégration de LLM dans les workflows métier : conception d'un outil interne React + API GPT pour automatiser l'enrichissement des fiches produits (génération SEO, import OCAPI) au service des clients Sisley, Neuraé et Haribo. Refonte de l'architecture MVC de l'espace client, améliorant la vitesse d'affichage de 30 %. Conception et développement d'APIs REST omnicanales (web / magasin) et intégration du paiement Klarna. Prototypage rapide et itération directe avec les équipes métier et UX, de la conception à la mise en production.",
        },
        {
            name: "Capgemini",
            time: "oct. 2019 - août 2023 · 3 ans 11 mois",
            projects: ["L'Oréal (Urban Decay, Kiehl's, YSL)", "Fast Retailing", "Orchestra"],
            position: "Développeur Full Stack JavaScript",
            company: "Capgemini",
            companyLink: "https://www.capgemini.com/",
            address: "Paris · Hybride",
            work:
                "Diagnostic et résolution de bugs critiques en production (checkout, paiement) pour le groupe L'Oréal, zone EMEA. Refonte de composants stratégiques (navigation, filtres, footer) avec un gain de performance de 15 %. Coordination internationale d'équipes offshore, revues de code et mentoring de développeurs juniors.",
        },
    ],
    personnalProjects: [
        {
            name: "Dog Days",
            img: DogDays,
            live_demo_url: "https://dog-days-web.vercel.app/",
            technologies: ["#Next.js", "#TypeScript", "#MongoDB", "#Redis", "#Claude Code"],
            colSize: 12,
            summary:
                "Jeu de stratégie 4X multijoueur web en production. Architecture complète pilotée par Claude Code : 17+ systèmes interconnectés, 28 routes API serveur, 20+ agents IA spécialisés orchestrés. 1 200+ tests automatisés (Vitest + Playwright), TDD strict, i18n FR/EN, authentification Google OAuth.",
        },
        {
            name: "Commis",
            img: Commis,
            technologies: ["#React Native", "#Expo", "#Gemini Flash", "#SQLite", "#RevenueCat"],
            colSize: 6,
            status: "En revue Google Play",
            summary:
                "Assistant pâtissier IA sur Android — actuellement en revue par Google en vue de sa publication sur le Play Store. Stack React Native / Expo SDK 55, Gemini Flash, expo-sqlite. Scan IA multi-photo de recettes (livre, blog, manuscrit) avec structuration automatique. Assistant conversationnel spécialisé pâtisserie, paywall RevenueCat, i18n 4 langues, base SQLite offline-first.",
        },
        {
            name: "Runova",
            img: Runova,
            technologies: ["#React Native", "#Expo", "#Firebase", "#RevenueCat"],
            colSize: 6,
            status: "Projet personnel",
            summary:
                "App mobile gamifiée Couch-to-5K (React Native / Expo, Firebase, RevenueCat). Cycle produit complet piloté par IA en 14 jours : étude de marché, PRD, CLAUDE.md, skills custom, handoff Claude Code de bout en bout.",
        },
        {
            name: "Alex Shop — Site e-commerce",
            img: AlexShopEcommerce,
            live_demo_url: "https://alex-shop-blue.vercel.app/",
            gitHub_url: "https://github.com/Forerunner78/alex-shop",
            technologies: ["#Next.js", "#MongoDB", "#PayPal"],
            colSize: 12,
            summary:
                "Site e-commerce MERN (MongoDB, Express, React, Node.js). Authentification utilisateurs, panier, checkout simulé via PayPal. Premier projet personnel Full Stack déployé.",
        },
    ],
};
