/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
    },
    extend: {
      colors: {
        primary: "#00F5A0",
        darkBg: "#050608",
        darkCard: "#0E1117",
        lightText: "#D8E4EC",
      },
    },
  },
  plugins: [],
};
