import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import { projects } from "../components/data/Projects";
import TransitionEffect from "../components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, value]);
    return <span ref={ref}></span>;
};

const experienceYears = () => {
    const currentYear = new Date().getFullYear();
    const experienceYears = currentYear - 2019;
    return experienceYears;
};

const projectsNumber = (collaboration) => {
    var number = 0;
    var projects = collaboration.map(function (project) {
        number += project.projects.length;
    });
    return number;
};

const collaborationNumber = (collaboration) => {
    return collaboration.length;
};

const About = () => {
    return (
        <>
            <Head>
                <title>Présentation · Alexandre Ribault | Dev Full Stack IA</title>
                <meta
                    name="description"
                    content="Parcours d'Alexandre Ribault, 6 ans d'expérience Full Stack JavaScript, spécialisé dans l'intégration de LLM au cœur des produits métiers. Utilisateur quotidien de Claude Code."
                />
                <meta property="og:title" content="Présentation · Alexandre Ribault | Dev Full Stack IA" />
                <meta
                    property="og:description"
                    content="Parcours d'Alexandre Ribault, 6 ans d'expérience Full Stack JavaScript, spécialisé dans l'intégration de LLM au cœur des produits métiers. Utilisateur quotidien de Claude Code."
                />
            </Head>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="p-32 pt-16 xl:p-24 lg:p-16 md:p-12 sm:pt-8 ">
                    <AnimatedText
                        text="Présentation"
                        className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
                    />
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:col-span-8 md:order-2">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                                Biographie
                            </h2>
                            <p className="text-justify font-medium indent-10">
                                Développeur Full Stack JavaScript avec {experienceYears()} ans d&apos;expérience, je mets aujourd&apos;hui les LLM au cœur des produits métiers. Utilisateur quotidien de Claude Code, je pratique le vibe coding : orchestration d&apos;agents, context engineering avancé, cycle produit complet piloté par IA. Ma stack principale : React, TypeScript, Node.js, MongoDB, éprouvée sur des projets e-commerce à forte audience et sur mes propres applications avec intégration LLM (Anthropic, Gemini).
                            </p>
                            <p className="text-justify font-medium indent-10 my-4">
                                Mon parcours est né chez Capgemini (2019-2023), où j&apos;ai contribué aux plateformes e-commerce du groupe L&apos;Oréal (Urban Decay, Kiehl&apos;s, YSL), Fast Retailing et Orchestra : diagnostic de bugs critiques en production, refonte de composants stratégiques, coordination d&apos;équipes offshore. J&apos;ai poursuivi chez Madagence (2023-2025) en intégrant mes premiers LLM dans les workflows métier : un outil React + API GPT pour automatiser l&apos;enrichissement des fiches produits Sisley, Neuraé et Haribo. J&apos;ai obtenu la certification Salesforce B2C Commerce Developer en 2023.
                            </p>
                            <p className="text-justify font-medium indent-10">
                                En 2026, j&apos;ai livré trois applications from scratch avec intégration LLM en pilotant le cycle produit complet par IA : <strong>Dog Days</strong> (jeu 4X multijoueur web, Next.js, MongoDB, Redis, 1&nbsp;200+ tests), <strong>Commis</strong> (assistant pâtisserie IA sur Android, React Native, Gemini Flash) et <strong>Runova</strong> (app gamifiée Couch-to-5K, cycle produit en 14 jours). Profil product-first, autonome, issu d&apos;une formation scientifique (Doctorat en Biothérapie Cellulaire et Tissulaire, UPMC 2018), je cherche aujourd&apos;hui un poste de développeur Full Stack IA ou un binôme CTO. N&apos;hésitez pas à me contacter !
                            </p>
                        </div>
                        <div className="hidden md:block" />
                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:col-span-6 md:order-1">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark dark:bg-light" />
                            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl">
                                <Image
                                    src="/img/photo_Alex_R.webp"
                                    alt="Portrait d'Alexandre Ribault"
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                                />
                            </div>
                        </div>
                        <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                            <div className="flex flex-col items-end justify-center xl:items-center rounded-2xl border-2 border-solid border-dark bg-light p-4 dark:bg-dark dark:border-light lg:mx-1">
                                <h2 className="text-3xl font-bold lg:text-2xl sm:text-xl xs:text-lg text-center">
                                    Développeur Full Stack IA
                                </h2>
                                <h2 className="text-xl font-medium lg:text-lg sm:text-base xs:text-sm text-center text-dark/75 dark:text-light/75 mt-1">
                                    React · TypeScript · Node.js
                                </h2>
                            </div>
                            <div className="flex flex-col items-end xl:items-center justify-center lg:mx-1">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5l xs:text-4xl">
                                    <AnimatedNumbers
                                        value={projectsNumber(projects.collaborations)}
                                    />{" "}
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    Projets
                                </h2>
                            </div>
                            <div className="flex flex-col items-end justify-center xl:items-center lg:mx-1">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5l xs:text-4xl">
                                    <AnimatedNumbers value={experienceYears()} /> +
                                </span>
                                <h2 className="text-xl font-medium text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm text-right">
                                    Années d&apos;experience
                                </h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    );
};
export default About;
