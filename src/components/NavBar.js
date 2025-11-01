import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import UnderlinedLink from "./UnderlinedLink";
import { GithubIcon, LinkedInIcon, TrailheadIcon, MoonIcon, SunIcon } from "./Icons";
import { componentStyles as styles, motionPresets } from "../styles/theme";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { useState } from "react";

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href);
    };

    return (
        <button
            href={href}
            className={`${className} relative group text-light dark:text-dark my-2`}
            onClick={handleClick}
        >
            {title}
            <span
                className={`h-[2px] inline-block bg-light absolute left-0 -bottom-1 
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? "w-full" : "w-0"} dark:bg-dark
            `}
            >
                &nbsp;
            </span>
        </button>
    );
};

const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className={`${styles.header.base} ${styles.header.light} ${styles.header.dark}`}>
            <button
                className={styles.button.hamburger}
                onClick={handleClick}
            >
                <span
                    className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
                        isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
                    }`}
                ></span>
                <span
                    className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                        isOpen ? "opacity-0" : "opacity-100"
                    }`}
                ></span>
                <span
                    className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                        isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
                    }`}
                ></span>
            </button>
            <div className={styles.navigation.desktop}>
                <nav>
                    <UnderlinedLink 
                        href="/" 
                        className={`${styles.navigation.link.base} ${styles.navigation.link.light} ${styles.navigation.link.dark}`}
                    >
                        Accueil
                    </UnderlinedLink>
                    <UnderlinedLink 
                        href="/presentation" 
                        className={`${styles.navigation.link.base} ${styles.navigation.link.light} ${styles.navigation.link.dark}`}
                    >
                        Présentation
                    </UnderlinedLink>
                    <UnderlinedLink 
                        href="/projets" 
                        className={`${styles.navigation.link.base} ${styles.navigation.link.light} ${styles.navigation.link.dark}`}
                    >
                        Projets
                    </UnderlinedLink>
                </nav>

                <nav className="flex items-center justify-center flex-wrap">
                    <motion.a
                        href="https://fr.linkedin.com/in/alexandre-ribault-00945668"
                        target="_blank"
                        whileHover={motionPresets.icon.whileHover}
                        whileTap={motionPresets.icon.whileTap}
                        className="w-6 mx-3"
                    >
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a
                        href="https://github.com/Forerunner78"
                        target="_blank"
                        whileHover={motionPresets.icon.whileHover}
                        whileTap={motionPresets.icon.whileTap}
                        className="w-6 mx-3"
                    >
                        <GithubIcon className='w-full h-auto'/>
                    </motion.a>
                    <motion.a
                        href="https://www.salesforce.com/trailblazer/alexribault"
                        target="_blank"
                        whileHover={motionPresets.icon.whileHover}
                        whileTap={motionPresets.icon.whileTap}
                        className="w-6 mx-3"
                    >
                        <TrailheadIcon />
                    </motion.a>
                    <button
                        className={`w-6 mx-3 flex items-center justify-center rounded-full p-1 ${
                            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
                        }`}
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}
                    >
                        {mode === "dark" ? (
                            <SunIcon className={"fill-dark"} />
                        ) : (
                            <MoonIcon className={"fill-dark"} />
                        )}
                    </button>
                </nav>
            </div>

            {isOpen ? (
                <motion.div
                    initial={{ scale: 0, opacity: 0, x: "-50%", y: "50%" }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
                >
                    <nav className="flex items-center flex-col justify-center">
                        <CustomMobileLink
                            href="/"
                            title="Acceuil"
                            className=""
                            toggle={handleClick}
                        />
                        <CustomMobileLink
                            href="/presentation"
                            title="Presentation"
                            className=""
                            toggle={handleClick}
                        />
                        <CustomMobileLink
                            href="/projets"
                            title="Projets"
                            className=""
                            toggle={handleClick}
                        />
                    </nav>

                    <nav className="flex items-center justify-center flex-wrap mt-2">
                        <motion.a
                            href="https://fr.linkedin.com/in/alexandre-ribault-00945668"
                            target="_blank"
                            whileHover={motionPresets.icon.whileHover}
                            whileTap={motionPresets.icon.whileTap}
                            className="w-6 mx-3"
                        >
                            <LinkedInIcon />
                        </motion.a>
                        <motion.a
                            href="https://github.com/Forerunner78"
                            target="_blank"
                            whileHover={motionPresets.icon.whileHover}
                            whileTap={motionPresets.icon.whileTap}
                            className="w-6 mx-3 bg-light dark:bg-dark rounded-full"
                        >
                            <GithubIcon className='w-full h-auto'/>
                        </motion.a>
                        <motion.a
                            href="https://www.salesforce.com/trailblazer/alexribault"
                            target="_blank"
                            whileHover={motionPresets.icon.whileHover}
                            whileTap={motionPresets.icon.whileTap}
                            className="w-6 mx-3"
                        >
                            <TrailheadIcon />
                        </motion.a>
                        <button
                            className={`w-6 mx-3 flex items-center justify-center rounded-full p-1 ${
                                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
                            }`}
                            onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        >
                            {mode === "dark" ? (
                                <SunIcon className={"fill-dark"} />
                            ) : (
                                <MoonIcon className={"fill-dark"} />
                            )}
                        </button>
                    </nav>
                </motion.div>
            ) : null}

            <div className="absolute left-[50%] translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    );
};

export default NavBar;
