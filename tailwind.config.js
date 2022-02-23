module.exports = {
    darkMode: 'class',
    purge: {
        content: [
            './pages/**/*.{js,ts,jsx,tsx}',
            './components/**/*.{js,ts,jsx,tsx}',
        ],
        options: {
            safelist: ['dark'],
        },
    },
    theme: {
        typography: theme => ({}),
        extend: {
            fontFamily: {
                Port: ['Port Lligat Sans', 'sans-serif'],
                Ropa: ['Ropa Sans', 'sans-serif'],
            },
            colors: {},
            typography: theme => ({
                dark: {
                    css: {
                        color: 'white',
                    },
                },
            }),
        },
    },
    variants: {
        typography: ['dark'],
    },
    plugins: [require('@tailwindcss/typography')],
}
