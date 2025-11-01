export const colors = {
    text: {
        base: 'text-gray-600 dark:text-gray-400',
        violet: 'text-violet-600 dark:text-violet-300'
    }
}

export const componentStyles = {
    card: {
        base: 'rounded-xl border border-solid transition-shadow duration-300',
        light: 'bg-white border-gray-200 hover:shadow-lg',
        dark: 'dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-violet-900/20',
        glow: 'relative',
        glowEffect: 'absolute -z-10 top-1 left-1 right-1 bottom-1 bg-violet-600/10 dark:bg-violet-400/10 rounded-lg blur-sm',
    },
    button: {
        base: 'rounded-lg font-medium transform transition-all duration-300',
        primary: 'bg-violet-600 text-white hover:bg-violet-700 hover:shadow-lg',
        secondary: 'border border-violet-600 text-violet-600 hover:bg-violet-50 dark:border-violet-400 dark:text-violet-300',
        icon: 'p-2 hover:bg-violet-50 dark:hover:bg-violet-900/20 rounded-full',
        contact: 'h-12 inline-flex items-center justify-center px-6 rounded-md bg-violet-600 text-white shadow-md hover:bg-violet-700 hover:shadow-lg transform transition duration-150 hover:scale-105 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-violet-300',
        hamburger: 'flex-col justify-center items-center hidden lg:flex lg:absolute lg:left-20 lg:top-10',
    },
    header: {
        base: 'sticky top-0 z-50 w-full px-32 lg:px-16 md:px-12 sm:px-8 lg:py-10 py-7 font-medium flex items-center justify-between relative',
        light: 'bg-white/70 backdrop-blur-md',
        dark: 'dark:bg-dark/70 dark:backdrop-blur dark:text-light',
    },
    navigation: {
        desktop: 'w-full flex justify-between items-center lg:hidden',
        link: {
            base: 'mr-4',
            light: 'text-dark',
            dark: 'dark:text-light',
        }
    },
    project: {
        title: {
            base: 'text-2xl font-bold transition-colors',
            light: 'text-violet-700 group-hover:text-violet-600',
            dark: 'dark:text-violet-300 dark:group-hover:text-violet-400',
        },
        description: 'my-4 text-gray-700 dark:text-gray-300 text-base leading-relaxed text-justify',
        imageContainer: {
            base: 'block overflow-hidden rounded-lg cursor-pointer',
            featured: 'w-1/2 lg:w-full',
            normal: 'w-full',
        },
    },
    tag: {
        base: 'px-3 py-1 text-sm font-medium rounded-full transition-colors',
        default: 'bg-violet-100 text-violet-700 hover:bg-violet-200 dark:bg-violet-900/30 dark:text-violet-300 dark:hover:bg-violet-900/40',
    },
};

export const motionPresets = {
    icon: {
        whileHover: { y: -2 },
        whileTap: { scale: 0.9 },
    },
    lift: {
        whileHover: { y: -3 },
        whileTap: { scale: 0.97 },
    },
};