/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["poppins", "system-ui"],
      roboto: ["Roboto Mono", "system-ui"],
      nunito: ["nunito", "system-ui"],
    },
    extend: {},
  },
  plugins: [],
};
