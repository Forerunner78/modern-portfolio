import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GithubIcon, LinkedInIcon } from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span
                className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-1 
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? "w-full" : "w-0"}
            `}
            >
                &nbsp;
            </span>
        </Link>
    );
};

const NavBar = () => {
    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
            <nav>
                <CustomLink href="/" title="Home" className="mr-4" />
                <CustomLink href="/about" title="About" className="mr-4" />
                <CustomLink href="/projects" title="Projects" className="mr-4" />
                <CustomLink href="/articles" title="Articles" className="mr-4" />
            </nav>

            <div className="absolue left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>

            <nav className="flex items-center justify-center flex-wrap">
                <motion.a
                    href="https://fr.linkedin.com/in/alexandre-ribault-00945668"
                    target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mx-3"
                >
                    <LinkedInIcon />
                </motion.a>
                <motion.a
                    href="https://github.com/Forerunner78"
                    target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mx-3"
                >
                    <GithubIcon />
                </motion.a>
            </nav>
        </header>
    );
};

export default NavBar;
