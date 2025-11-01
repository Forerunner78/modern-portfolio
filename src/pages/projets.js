import Head from "next/head";
import Layout from "../components/Layout";
import { projects } from "../components/data/Projects";
import { colors } from "../styles/theme";
import ProjectCard from "../components/ProjectCard";
import AnimatedText from "../components/AnimatedText";
import TransitionEffect from "../components/TransitionEffect";

const DisplayProjects = () => {
    const personalProjects = projects.personnalProjects;
    return personalProjects.map((project, index) => (
        <ProjectCard
            key={index}
            project={project}
            isFeatured={project.colSize === 12}
        />
    ));
};

const Projects = () => {
    return (
        <>
            <Head>
                <title>Projets d&apos;Alexandre Ribault | Portfolio</title>
                <meta 
                    name="description" 
                    content="Découvrez mes projets de développement, spécialisés en Salesforce Commerce Cloud et technologies web modernes." 
                />
                <meta property="og:title" content="Projets d'Alexandre Ribault | Portfolio" />
                <meta
                    property="og:description"
                    content="Découvrez mes projets de développement, spécialisés en Salesforce Commerce Cloud et technologies web modernes."
                />
            </Head>
            <TransitionEffect />
            <main className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                <Layout className="py-16 px-8 md:px-12 lg:px-16 xl:px-24">
                    <div className="max-w-7xl mx-auto">
                        <AnimatedText
                            text="Mes Réalisations"
                            className="mb-12 lg:!text-6xl md:!text-5xl sm:!text-4xl"
                        />
                        <p className={`${colors.text.base} text-lg mb-16 max-w-3xl mx-auto text-center`}>
                            Une sélection de mes projets personnels et professionnels, 
                            démontrant mon expertise en développement web et e-commerce.
                        </p>
                        <div className="grid grid-cols-12 gap-8 justify-center">
                            <DisplayProjects />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default Projects;
