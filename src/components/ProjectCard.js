import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GithubIcon } from "./Icons";
import Technologies from "./Technologies";
import UnderlinedLink from "./UnderlinedLink";
import { componentStyles as styles, motionPresets } from "../styles/theme";

const MotionImage = motion(Image);

const ProjectCard = ({ project, isFeatured = false }) => {
    const { name: title, img, summary, live_demo_url: link, gitHub_url: github, technologies, status } = project;

    const containerClass = isFeatured
        ? 'col-span-12'
        : 'col-span-6 sm:col-span-12';

    const contentLayout = isFeatured
        ? 'lg:flex-col items-center justify-between'
        : 'flex-col items-start';

    const imageContainerClass = `
        ${styles.project.imageContainer.base}
        ${isFeatured ? styles.project.imageContainer.featured : styles.project.imageContainer.normal}
    `;

    const image = (
        <MotionImage
            src={img}
            alt={title}
            className="w-full h-auto object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            priority
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        />
    );

    const titleNode = (
        <h2 className={`
            ${styles.project.title.base}
            ${styles.project.title.light}
            ${styles.project.title.dark}
        `}>
            {title}
        </h2>
    );

    return (
        <div className={`${containerClass} h-full`}>
            <article className={`
                ${styles.card.glow} w-full h-full flex ${contentLayout}
                ${styles.card.base} ${styles.card.light} ${styles.card.dark}
                ${isFeatured ? 'p-8 lg:p-6 sm:p-4' : 'p-6 sm:p-4'}
            `}>
                <div className={styles.card.glowEffect} />

                {link ? (
                    <Link
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={imageContainerClass}
                        aria-label={`Apercu du projet ${title} (nouvel onglet)`}
                    >
                        {image}
                    </Link>
                ) : (
                    <div className={imageContainerClass}>{image}</div>
                )}

                <div className={`
                    flex flex-col flex-1
                    ${isFeatured ? 'w-1/2 lg:w-full pl-6 lg:pl-0 lg:pt-6' : 'w-full pt-4'}
                `}>
                    {link ? (
                        <UnderlinedLink
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group text-center"
                            aria-label={`Page du projet ${title} (nouvel onglet)`}
                        >
                            {titleNode}
                        </UnderlinedLink>
                    ) : (
                        <div className="text-center">{titleNode}</div>
                    )}

                    {status && (
                        <span className="mx-auto mt-2 inline-flex items-center rounded-full border border-primary-500/40 bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-800 dark:border-accentDark-400/40 dark:bg-accentDark-500/10 dark:text-accentDark-300">
                            {status}
                        </span>
                    )}

                    <p className={styles.project.description}>
                        {summary}
                    </p>

                    <Technologies technologies={technologies} />

                    {(github || link) && (
                        <div className="mt-auto pt-6 flex items-center gap-4">
                            {github && (
                                <motion.a
                                    href={github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={motionPresets.icon.whileHover}
                                    whileTap={motionPresets.icon.whileTap}
                                    className={`${styles.button.icon} text-gray-700 dark:text-gray-300`}
                                    title="Voir le code sur GitHub"
                                    aria-label={`Voir le code de ${title} sur GitHub`}
                                >
                                    <GithubIcon className='w-8 h-auto'/>
                                </motion.a>
                            )}
                            {link && (
                                <Link
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.button.contact}
                                    aria-label={`Voir le projet ${title} en ligne (nouvel onglet)`}
                                >
                                    Voir le projet
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </article>
        </div>
    );
};

export default ProjectCard;