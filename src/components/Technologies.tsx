interface TechnologiesProps {
    technologies?: string[];
}

const Technologies = ({ technologies }: TechnologiesProps) => {
    if (!technologies || technologies.length === 0) return null;

    return (
        <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech, index) => (
                <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium rounded-full bg-primary-100 text-primary-800 dark:bg-accentDark-900/30 dark:text-accentDark-300 hover:bg-primary-200 dark:hover:bg-accentDark-900/40 transition-colors"
                    title={tech}
                >
                    {tech}
                </span>
            ))}
        </div>
    );
};

export default Technologies;
