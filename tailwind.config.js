/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      inset: {
        18: "72px",
      },
      fontSize: {
        xxs: "0.6rem",
      },
      minHeight: {
        screenNoHeader: "calc(100vh - 72px)",
      },
      height: {
        18: "72px",
        30: "126px",
      },
      colors: {
        darkBlue: "#0D3450",
        lightBlue: "#2177B31A",
        myGray: "#eaeaea",
        gold: "#E6C83C",
      },
      fontFamily: {
        raleway: ["Raleway", "cursive"],
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
    },
  },
  plugins: [],
};
