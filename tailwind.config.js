
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E63946",
        secondary: "#1D3557",
        background: "#F1FAEE",
        accent: "#A8DADC",
        textcolor: "#111827",
      },
      fontFamily: {
        heading: ['Oswald', 'Bebas Neue', 'sans-serif'],
        body: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
        numbers: ['Anton', 'Impact', 'sans-serif'],
      },
      boxShadow: {
        'elevate': '0 10px 25px rgba(0,0,0,0.15)',
      },
      borderRadius: {
        '2xl': '1.25rem',
      }
    },
  },
  plugins: [],
}
