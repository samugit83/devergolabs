/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {  //https://tailwindcss.com/docs/theme
    extend: { //importante, se definisco gli attributi al di fuori di extend, sotituisce e cancella tutti i valori di default.
      screens: {
        'xs': '450px', 
      },
      colors: {
          primary: 'var(--color-primary)',
          secondary: 'var(--color-secondary)',
          background_dark: 'var(--color-background_dark)',
        },
    },
  },
  plugins: [],
}
