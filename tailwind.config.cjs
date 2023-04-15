/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            fontSize: {
                heading: ['128px', { lineHeight: '130px' }],
                h2: ['40px', { lineHeight: '42px', letterSpacing: '-0.02em' }],
                h3: ['32px', { lineHeight: '34px', letterSpacing: '-0.02em' }],
                'h3-m': ['22px', { lineHeight: '22px', letterSpacing: '-0.02em' }],
                info: ['24px', { lineHeight: '34px', letterSpacing: '-0.05em' }],
                body: ['20px', { lineHeight: '22px', letterSpacing: '-0.03em' }],
                link: ['16px', { lineHeight: '16px', letterSpacing: '-0.05em' }],
                detail: ['16px', { lineHeight: '16px', letterSpacing: '-0.05em' }]
            },
            colors: {
                gray: '#D9D9D9',
                asparagus: '#8DAA57',
                'eerie-black': '#181818',
                'mauve-taupe': '#846075',
                'red-purple': '#AF5D63'
            },
            fontFamily: {
                tiny: ['TINY'],
                spacegrotesk: ['Space Grotesk'],
                basis: ['Basis Grotesque']
            }
        }
    },
    plugins: []
};
