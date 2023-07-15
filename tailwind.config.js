/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    screens: {
      xs: "340px",
      sm: "576px",
      md: "768px",
      lg: "976px",
      xl: "1120px",
      "2xl": "1220px",
    },
    extend: {
      colors: {
        grey: "#EEE",
        "grey-dark": "#666",
        orange: "#FFB400",
        dgrey: "#4B4B4B",
        navbg: "#2B2A2A",
        dark: "#111111",
      },
    },
  },
  plugins: [],
};
