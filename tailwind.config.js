/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: { mont: ["var(--font-mont)", ...fontFamily.sans] },
            colors: {
                dark: "#1b1b1b",
                light: "#f5f5f5",
                primary: {
                    DEFAULT: "#C2410C",
                    50: "#FFF7ED",
                    100: "#FFEDD5",
                    200: "#FED7AA",
                    300: "#FDBA74",
                    400: "#FB923C",
                    500: "#F97316",
                    600: "#EA580C",
                    700: "#C2410C",
                    800: "#9A3412",
                    900: "#7C2D12",
                },
                accentDark: {
                    DEFAULT: "#A78BFA",
                    50: "#F5F3FF",
                    100: "#EDE9FE",
                    200: "#DDD6FE",
                    300: "#C4B5FD",
                    400: "#A78BFA",
                    500: "#8B5CF6",
                    600: "#7C3AED",
                    700: "#6D28D9",
                    800: "#5B21B6",
                    900: "#4C1D95",
                },
                primaryDark: "#58E6D9",
                primaryRed: "#FF0000",
                primaryBlue: "	#1E90FF",
                primaryPurple: "#FF00FF",
                primaryDarkOrange: "#FFA500",
                primaryDarkYellow: "#FFFF00",
            },
            animation: { "spin-slow": "spin 8s linear infinite" },
            backgroundImage: {
                circularLight:
                    "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px);",
                circularDark:
                    "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 8px, #1b1b1b 100px);",
                circularLightLg:
                    "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 80px);",
                circularDarkLg:
                    "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 8px, #1b1b1b 80px);",
                circularLightMd:
                    "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 60px);",
                circularDarkMd:
                    "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 6px, #1b1b1b 60px);",
                circularLightSm:
                    "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 40px);",
                circularDarkSm:
                    "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 4px, #1b1b1b 40px);",
            },
        },
        screens: {
            "4xl": { max: "1900px" },
            // => @media(max-width:1535px)}
            "2xl": { max: "1535px" },
            // => @media(max-width:1535px)}
            xl: { max: "1279px" },
            // => @media(max-width:1279px)}
            lg: { max: "1023px" },
            // => @media(max-width:1023px)}
            md: { max: "767px" },
            // => @media(max-width:767px)}
            sm: { max: "639px" },
            // => @media(max-width:639px)}
            xs: { max: "479px" },
            // => @media(max-width:479px)}
        },
        plugins: [],
    },
};
