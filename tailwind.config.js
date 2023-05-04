/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8000FF",
        secondary: "#F8522E",
        button: "#1C1F26",
        "font-clr": "rgba(227, 229, 232, 0.56)",
        "background-clr": "#0D0E12",
        "blur-clr": "rgba(170, 63, 255, 0.07)",
        box: "rgba(18, 20, 24, 0.54)",
        "mouse-move": "rgba(92, 92, 92, 0.09)",
      },
      backgroundImage: {
        "gradient-text": "linear-gradient(270deg, #F8522E, #AA3FFF, #6557FF)",
      },
    },
  },
  plugins: [],
};
