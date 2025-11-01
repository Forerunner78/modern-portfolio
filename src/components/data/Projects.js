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
            name: "MADAGENCE",
            time: "sept. 2023 - juin 2025 · 1 an 10 mois",
            projects: ["Sisley", "Haribo", "Groupe Petite Enfance"],
            position: "Développeur back-end | B2C Salesforce Commerce Cloud",
            company: "MADAGENCE",
            companyLink: "https://www.madagence.com",
            address: "Orléans · À distance",
            work:
                "Refonte de l'espace client (commandes, cartes cadeaux, données personnelles) — amélioration de la navigation et réduction du temps d'affichage d'environ 30%. Développement d'e-mails transactionnels (commande, expédition, retour) pour clarifier le suivi client. Développement d'APIs vers United Retail permettant d'agréger l'historique d'achats (web & magasin) et les informations liées aux cartes cadeaux. Activation de Klarna Pay Now et conception d'un country-switcher pour améliorer la conversion mobile et l'expérience internationale.",
        },
        {
            name: "Capgemini",
            time: "oct. 2020 - août 2023 · 2 ans 11 mois",
            projects: ["L'Oréal (plusieurs marques)"],
            position: "Développeur back-end | B2C Salesforce Commerce Cloud",
            company: "Capgemini",
            companyLink: "https://www.capgemini.com/",
            address: "Paris · Hybride",
            work:
                "Participation à des projets BUILD, RUN et ROLLOUT pour des marques du groupe L'Oréal (Urban Decay, Kiehl's, YSL…). Développement d'un programme de fidélité multimarques pour renforcer la rétention client. Refonte de composants critiques (navigation, filtres, footer) avec amélioration des performances d'environ 15%. Gestion d'incidents critiques en production pour rétablir rapidement les parcours d'achat. Collaboration internationale et contribution aux revues de code pour garantir la qualité.",
        },
        {
            name: "Capgemini",
            time: "oct. 2019 - oct. 2020 · 1 an 1 mois",
            projects: ["Fast Retailing", "Orchestra"],
            position: "Développeur back-end | B2C Salesforce Commerce Cloud",
            company: "Capgemini",
            companyLink: "https://www.capgemini.com/",
            address: "Paris · Hybride",
            work:
                "Conduite de projets pour Fast Retailing (Princess Tam Tam, Comptoir des Cotonniers) et Orchestra. Refonte de composants clés (navigation, filtres, footer) pour améliorer la fluidité. Ajout de fonctionnalités front (Google Autocomplete) pour améliorer la saisie d'adresse. Diagnostic et résolution de bugs critiques afin de fiabiliser les parcours utilisateurs.",
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
