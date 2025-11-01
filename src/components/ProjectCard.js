import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GithubIcon } from "./Icons";
import Technologies from "./Technologies";
import UnderlinedLink from "./UnderlinedLink";
import { componentStyles as styles, motionPresets } from "../styles/theme";

const MotionImage = motion(Image);

const ProjectCard = ({ project, isFeatured = false }) => {
    const { name: title, img, summary, live_demo_url: link, gitHub_url: github, technologies } = project;

    const containerClass = isFeatured 
        ? 'col-span-12' 
        : 'col-span-6 sm:col-span-12';

    const contentLayout = isFeatured
        ? 'lg:flex-col items-center justify-between'
        : 'flex-col items-start';

    return (
        <div className={containerClass}>
            <article className={`
                ${styles.card.glow} w-full flex ${contentLayout} 
                ${styles.card.base} ${styles.card.light} ${styles.card.dark}
                ${isFeatured ? 'p-8 lg:p-6 sm:p-4' : 'p-6 sm:p-4'}
            `}>
                <div className={styles.card.glowEffect} />

                <Link
                    href={link}
                    target="_blank"
                    className={`
                        ${styles.project.imageContainer.base}
                        ${isFeatured ? styles.project.imageContainer.featured : styles.project.imageContainer.normal}
                    `}
                >
                    <MotionImage
                        src={img}
                        alt={title}
                        className="w-full h-auto object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        priority
                        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    />
                </Link>

                <div className={`
                    flex flex-col 
                    ${isFeatured ? 'w-1/2 lg:w-full pl-6 lg:pl-0 lg:pt-6' : 'w-full pt-4'}
                `}>
                    <UnderlinedLink
                        href={link}
                        target="_blank"
                        className="group text-center"
                    >
                        <h2 className={`
                            ${styles.project.title.base}
                            ${styles.project.title.light}
                            ${styles.project.title.dark}
                        `}>
                            {title}
                        </h2>
                    </UnderlinedLink>

                    <p className={styles.project.description}>
                        {summary}
                    </p>

                    <Technologies technologies={technologies} />

                    <div className="mt-6 flex items-center gap-4">
                        {github && (
                            <motion.a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={motionPresets.icon.whileHover}
                                whileTap={motionPresets.icon.whileTap}
                                className={`${styles.button.icon} text-gray-700 dark:text-gray-300`}
                                title="Voir le code sur GitHub"
                            >
                                <GithubIcon className='w-8 h-auto'/>
                            </motion.a>
                        )}
                        <Link
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={motionPresets.lift.whileHover}
                            whileTap={motionPresets.lift.whileTap}
                            className={styles.button.contact}
                        >
                            Voir le projet
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default ProjectCard;