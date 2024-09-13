/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3182CE",
        secondary: "#90FF00",
        accent: "#FFC0CB",
        background: "#F9F9F9",
        gray: {
          light: "#545454",
          dark: "#0B0B0B"
        },
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
