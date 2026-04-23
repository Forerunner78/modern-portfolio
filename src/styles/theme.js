export const colors = {
    text: {
        base: 'text-gray-600 dark:text-gray-400',
        accent: 'text-primary-700 dark:text-accentDark-300'
    }
}

export const componentStyles = {
    card: {
        base: 'rounded-xl border border-solid transition-shadow duration-300',
        light: 'bg-white border-gray-200 hover:shadow-lg',
        dark: 'dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-accentDark-900/20',
        glow: 'relative',
        glowEffect: 'absolute -z-10 top-1 left-1 right-1 bottom-1 bg-primary-700/10 dark:bg-accentDark-400/10 rounded-lg blur-sm',
    },
    button: {
        base: 'rounded-lg font-medium transform transition-all duration-300',
        primary: 'bg-primary-700 text-white hover:bg-primary-800 hover:shadow-lg dark:bg-accentDark-500 dark:hover:bg-accentDark-600',
        secondary: 'border border-primary-700 text-primary-700 hover:bg-primary-50 dark:border-accentDark-400 dark:text-accentDark-300 dark:hover:bg-accentDark-900/20',
        icon: 'p-2 hover:bg-primary-50 dark:hover:bg-accentDark-900/20 rounded-full',
        contact: 'h-12 inline-flex items-center justify-center px-6 rounded-md bg-primary-700 text-white shadow-md hover:bg-primary-800 hover:shadow-lg transform transition duration-150 hover:scale-105 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary-300 dark:bg-accentDark-500 dark:hover:bg-accentDark-600 dark:focus:ring-accentDark-300',
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
            light: 'text-primary-800 group-hover:text-primary-700',
            dark: 'dark:text-accentDark-300 dark:group-hover:text-accentDark-400',
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
        default: 'bg-primary-100 text-primary-800 hover:bg-primary-200 dark:bg-accentDark-900/30 dark:text-accentDark-300 dark:hover:bg-accentDark-900/40',
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
