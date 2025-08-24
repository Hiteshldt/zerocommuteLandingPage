import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ZeroCommute Brand Colors
        'dark-green': '#28723e',
        'light-beige': '#c4d1bd', 
        'soft-mint': '#ceebcd',
        'muted-aqua': '#68a68c',
        'deep-navy': '#002f4b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config