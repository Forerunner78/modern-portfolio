import { motion } from "framer-motion";
import { skills, SkillsData } from "./data/Skills";

const displaySkills = (skills: SkillsData) => {
    return skills.skillsArray.map((skill) => {
        const name = skill.name;
        const x = skill.x;
        const y = skill.y;

        return (
            <motion.div
                key={name}
                className={`flex items-center justify-center rounded-full font-semibold ${skill.colorClass} text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 sm:bg-transparent sm:dark:bg-transparent sm:font-bold sm:text-xs sm:p-2 sm:text-dark sm:dark:text-light`}
                whileHover={{ scale: 1.25 }}
                initial={{ x: 0, y: 0 }}
                whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
            >
                {name}
            </motion.div>
        );
    });
};

const Skills = () => {
    return (
        <>
            <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
                Compétences
            </h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
                {displaySkills(skills)}
            </div>
        </>
    );
};
export default Skills;
