/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "priClr": "var(--priClr)",
        "priClr2": "var(--priClr2)",
        "secClr": "var(--secClr)",
        "secClr2": "var(--secClr2)",
        "priTextClr": "var(--priTextClr)",
        "secTextClr": "var(--secTextClr)",
        "priBgClr": "var(--priBgClr)",
        "secBgClr": "var(--secBgClr)",
        "focusColor": "var(--focusColor)",
        "priTransClr": "var(--priTransClr)"
      }
    },
  },
  plugins: [],
}

