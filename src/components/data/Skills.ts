export interface SkillItem {
    name: string;
    x: string;
    y: string;
    colorClass: string;
    size?: string;
}

export interface SkillsData {
    skillsArray: SkillItem[];
}

export const skills: SkillsData = {
    skillsArray: [
        {
            name: "Claude Code",
            x: "0vw",
            y: "0vw",
            colorClass: "bg-purple-600 dark:bg-purple-400",
            size: "lg",
        },
        {
            name: "Context Engineering",
            x: "-20vw",
            y: "0vw",
            colorClass: "bg-teal-800 dark:bg-teal-400",
        },
        {
            name: "Agents IA",
            x: "20vw",
            y: "0vw",
            colorClass: "bg-fuchsia-700 dark:bg-fuchsia-400",
        },
        {
            name: "Gemini Flash",
            x: "0vw",
            y: "-10vw",
            colorClass: "bg-red-700 dark:bg-red-400",
        },
        {
            name: "Anthropic API",
            x: "10vw",
            y: "-6vw",
            colorClass: "bg-purple-700 dark:bg-purple-300",
        },
        {
            name: "React",
            x: "-10vw",
            y: "-6vw",
            colorClass: "bg-blue-700 dark:bg-blue-300",
        },
        {
            name: "Next.js",
            x: "-10vw",
            y: "6vw",
            colorClass: "bg-slate-600 dark:bg-slate-300",
        },
        {
            name: "TypeScript",
            x: "10vw",
            y: "6vw",
            colorClass: "bg-blue-600 dark:bg-blue-400",
        },
        {
            name: "JavaScript",
            x: "0vw",
            y: "10vw",
            colorClass: "bg-yellow-800 dark:bg-yellow-400",
        },
        {
            name: "Node.js",
            x: "-18vw",
            y: "-10vw",
            colorClass: "bg-lime-800 dark:bg-lime-400",
        },
        {
            name: "MongoDB",
            x: "18vw",
            y: "-10vw",
            colorClass: "bg-green-800 dark:bg-green-500",
        },
        {
            name: "Redis",
            x: "18vw",
            y: "10vw",
            colorClass: "bg-red-700 dark:bg-red-400",
        },
        {
            name: "Tailwind CSS",
            x: "-18vw",
            y: "10vw",
            colorClass: "bg-cyan-700 dark:bg-cyan-300",
        },
        {
            name: "React Native / Expo",
            x: "-26vw",
            y: "-8vw",
            colorClass: "bg-cyan-800 dark:bg-cyan-300",
        },
        {
            name: "Firebase",
            x: "26vw",
            y: "-8vw",
            colorClass: "bg-amber-800 dark:bg-amber-500",
        },
        {
            name: "Vitest",
            x: "-26vw",
            y: "8vw",
            colorClass: "bg-emerald-800 dark:bg-emerald-300",
        },
        {
            name: "Playwright",
            x: "26vw",
            y: "8vw",
            colorClass: "bg-green-800 dark:bg-green-400",
        },
        {
            name: "TDD",
            x: "8vw",
            y: "18vw",
            colorClass: "bg-cyan-700 dark:bg-cyan-400",
        },
        {
            name: "Git",
            x: "-8vw",
            y: "18vw",
            colorClass: "bg-orange-800 dark:bg-orange-400",
        },
        {
            name: "SFCC",
            x: "-22vw",
            y: "18vw",
            colorClass: "bg-sky-700 dark:bg-sky-400",
        },
        {
            name: "SFRA",
            x: "22vw",
            y: "18vw",
            colorClass: "bg-indigo-700 dark:bg-indigo-400",
        },
    ],
};
