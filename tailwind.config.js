/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['selector', '[data-mode="light"]'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#003996',
                secondary: '#da0000',
                third: '#ededed',
                background: '#f6f8fd',
                text: {
                    primary: '#333',
                    secondary: '#666',
                },
            },
        },
    },
    plugins: [require('tailwindcss-animated')],
};
