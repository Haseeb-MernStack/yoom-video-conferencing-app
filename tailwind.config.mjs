/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: {
                    1: "#1C1F2E",
                    2: "#161925",
                },
            },
        },
    },
    plugins: [],
};

export default config;
