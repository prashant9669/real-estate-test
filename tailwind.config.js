/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1224px",
        xl: "1350px",
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
