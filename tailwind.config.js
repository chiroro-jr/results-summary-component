/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html'],
    theme: {
        fontFamily: {
            hanken: ['Hanken Grotesk', 'sans-serif'],
        },
        colors: {
            'light-red': 'hsl(0, 100%, 67%)',
            'orangey-yellow': 'hsl(39, 100%, 56%)',
            'green-teal': 'hsl(166, 100%, 37%)',
            'light-lavender': 'hsl(241, 100%, 89%)',
            transparent: 'transparent',
            white: 'hsl(0, 0%, 100%)',
            blue: {
                pale: 'hsl(221, 100%, 96%)',
                slate: 'hsl(252, 100%, 67%)',
                gray: 'hsl(224, 30%, 27%)',
                cobalt: 'hsl(234, 85%, 45%)',
                violet: 'hsla(256, 72%, 46%, 1)',
                persian: 'hsla(241, 72%, 46%, 0)',
            },
        },
        extend: {},
    },
    plugins: [],
}
