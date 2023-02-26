/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                gray: '#D9D9D9',
                asparagus: '#8DAA57',
                'eerie-black': '#181818',
                'mauve-taupe': '#846075',
                'red-purple': '#AF5D63'
            },
            fontFamily: {
                tiny: ['TINY'],
                spacegrotesk: ['Space Grotesk']
            }
        }
    },
    plugins: []
};
