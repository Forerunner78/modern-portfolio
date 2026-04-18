import Jungle from "./../../img/Jungle.jpg";
import Books from "./../../img/Books.jpg";
import Hotel from "./../../img/Hotel.jpg";
import Marvel from "./../../img/Marvel.jpg";
import News from "./../../img/News.jpg";
import Shiny from "./../../img/Shiny.jpg";
import Portfolio from "./../../img/Portfolio.jpg";
import WorkInProgress from "./../../img/WorkInProgress.jpg";
import AlexShopEcommerce from "./../../img/Alex_Shop_Ecommerce.jpg";

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
            name: "Alex Shop - Site ecommerce",
            img: AlexShopEcommerce,
            live_demo_url: "https://alex-shop-blue.vercel.app/",
            gitHub_url: "https://github.com/Forerunner78/alex-shop",
            technologies: ["#nextJS", "#mongoDB", "#paypal"],
            colSize: 12,
            summary:
                "Site web ecommerce construit en utilisant la technologie MERN (mongoDB, Express, React et Node.js). Les données sont stockées sur mongoDB. Il permet de simuler des achats au moyen de Paypal. En outre il possède un système d'authentification.",
        },
        {
            name: "Site web Portfolio",
            img: Portfolio,
            live_demo_url: "https://modern-portfolio-alexandre-ribault.vercel.app/",
            gitHub_url: "https://github.com/Forerunner78/modern-portfolio",
            technologies: ["#nextJS", "#tailwindcss", "#framer-motion"],
            colSize: 6,
            summary:
                "Site web portfolio responsive créé en utilisant NextJS, framer-motion et TailwindCSS. Il possède des animations et des transitions. Il répertorie tous les projets que j'ai créés.",
        },
        {
            name: "Application de recherche de livres",
            img: Books,
            live_demo_url: "https://react-search-books-96687.firebaseapp.com/",
            gitHub_url: "https://github.com/Forerunner78/React-Books",
            technologies: ["#ReactJS", "#Redux", "#Bootstrap"],
            colSize: 6,
            summary:
                "Application créée en ReactJS. Elle permet de faire des recherches de livres en utilisant l'API Google et stocker ceux que l'on souhaite dans notre liste.",
        },
        {
            name: "Shiny Agency",
            img: Shiny,
            live_demo_url: "https://react-shiny-agency.firebaseapp.com/",
            gitHub_url: "https://github.com/Forerunner78/React-Shiny-Agency",
            technologies: ["#ReactJS", "#Javascript", "#CSS3"],
            colSize: 6,
            summary:
                "Template d'un site d'agence créé avec ReactJS. Il possède un dark mode et suggère des profils de développeur en fonction des besoins identifiés au moyen d'un test",
        },
        {
            name: "La Maison Jungle",
            img: Jungle,
            live_demo_url: "https://forerunner78.github.io/React-La-Maison-Jungle/",
            gitHub_url: "https://github.com/Forerunner78/React-La-Maison-Jungle",
            technologies: ["#React Js", "#HTML5", "#CSS3"],
            colSize: 6,
            summary:
                "Template front-end d'un site e-commerce créé en React. Il permet de manipuler des données, les ajouter ou les retirer de son panier",
        },
        {
            name: "Application Marvel Quiz",
            img: Marvel,
            live_demo_url: "https://marvel-quiz-51916.firebaseapp.com/",
            gitHub_url: "https://github.com/Forerunner78/React-Marvel-Quizz",
            technologies: ["#React Js", "#Firebase", "#Axios"],
            colSize: 12,
            summary:
                "Application de Quizz créée en ReactJS. Elle fait appelle à de nombreuses dépendances. Firebase a également été utilisé pour gérer l'authentification des utilisateurs, la gestion des profils et mots de passe",
        },
        {
            name: "News Website",
            img: News,
            live_demo_url: "https://forerunner78.github.io/Journal-website/",
            gitHub_url: "https://github.com/Forerunner78/Journal-website",
            technologies: ["#HTML5", "#CSS3"],
            colSize: 6,
            summary: "Template front-end d'un site web d'informations créé en HTML",
        },
        {
            name: "Hotel Website",
            img: Hotel,
            live_demo_url: "https://forerunner78.github.io/Hotel/index.html",
            gitHub_url: "https://github.com/Forerunner78/Hotel",
            technologies: ["#HTML5", "#CSS3"],
            colSize: 6,
            summary: "Template front-end d'un site web d'hotel créé en HTML",
        },
    ],
};
