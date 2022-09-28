/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "hsl(var(--color-primary-green-dark) / <alpha-value>)",
      secondary: "hsl(var(--color-primary-green-light) / <alpha-value>)",
      "yellow-main": "hsl(var(--color-accent-yellow) / <alpha-value>)",
      white: "hsl(var(--color-neutral-white) / <alpha-value>)",
      red: "red",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    fontWeight: {
      regular: 400,
      semibold: 600,
      bold: 700,
    },
    extend: {},
  },
  plugins: [],
};
