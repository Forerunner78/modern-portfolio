const Technologies = ({ technologies }) => {
    if (!technologies || technologies.length === 0) return null;

    return (
        <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech, index) => (
                <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium rounded-full bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 hover:bg-violet-200 dark:hover:bg-violet-900/40 transition-colors"
                    title={tech}
                >
                    {tech}
                </span>
            ))}
        </div>
    );
};

export default Technologies;
