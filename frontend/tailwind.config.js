export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        academic: {
          navy: '#0f2744',
          navyDark: '#09182b',
          teal: '#134e4a',
          tealDark: '#042f2e',
          tealLight: '#0d9488',
          gold: '#c28822',
          goldLight: '#eab308',
          goldDark: '#996515',
          cream: '#faf8f5',
          parchment: '#f3ece3',
          slate: '#334155',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'academic': '0 10px 30px -10px rgba(15, 39, 68, 0.15)',
        'academic-hover': '0 20px 40px -15px rgba(15, 39, 68, 0.25)',
      }
    },
  },
  plugins: [],
}
