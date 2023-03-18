const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                white: "#FFFFFF",
                gray: {
                    100: "#F5F5F5",
                    200: "#E4E4E4",
                    300: "#C1C4CB",
                    400: "#7C8187",
                    500: "#5A6069",
                    600: "#35393F",
                    700: "#2B2D31",
                    800: "#1D1F22",
                    900: "#151619",
                },
                orange: {
                    100: "#F39765",
                    200: "#E46643",
                },
            },
            fontFamily: {
                sans: ["var(--roboto)", ...fontFamily.sans],
                roboto: "var(--roboto)",
                robotoSlab: "var(--roboto-slab)",
                robotoMono: "var(--roboto-mono)",
            },
            transitionProperty: {
                width: "width",
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        // ...
    ],
};
