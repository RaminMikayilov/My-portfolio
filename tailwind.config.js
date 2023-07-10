/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#EEE",
        "grey-dark": "#666",
        orange: "#FFB400",
        dark: "#111111",
      },
    },
  },
  plugins: [],
};
