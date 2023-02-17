/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./layouts/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        button: "0 11px 31px rgba(0, 0, 0, .25)",
      },
      colors: {
        primary: "#0057FF",
        paypal: "#002C8A",
      },
      space: {
        img_overlapping: "-10px",
      },
      backgroundImage: {
        "slide-animation": "url('../assets/section1.gif')",
        "square-pattern": `linear-gradient(rgba(0, 0, 0, 0.036) 2px, transparent 2px), linear-gradient(90deg, rgba(0, 0, 0, 0.036) 1px, transparent 1px);`,
      },
      backgroundSize: {
        pattern: "40px 40px, 40px 40px, 20px 20px, 20px 20px",
      },
      backgroundPosition: {
        pattern: "-2px -2px, -2px -2px, -1px -1px, -1px -1px",
      },
    },
  },
  plugins: [],
};
