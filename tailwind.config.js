/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        persian: ['Vazirmatn', 'sans-serif'],
      },
      colors: {
        cyber: {
          blue: '#00f0ff',
          purple: '#b026ff',
          dark: '#0B0014',
          light: '#1A0033'
        }
      }
    },
  },
  plugins: [],
}
