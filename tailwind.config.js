/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./src/**'],
    theme: {
        extend: {
            colors: {
                primary: '#fefaf6',
                secondary: '#eadbc8',
                ternary: '#dac0a3',
                quaternary: '#102C57',
            },
        },
    },
    plugins: [],
}
