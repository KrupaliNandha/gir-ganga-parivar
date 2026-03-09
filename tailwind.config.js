/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./Component/**/*.{js,ts,jsx,tsx}",   
    "./components/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        tealBrand: "var(--color-tealBrand)",
        cyanBrand: "var(--color-cyanBrand)",
        greenish: "var(--color-greenish)",
        yell: "var(--color-yell)",
        grn: "var(--bg-grn)",


      },
    },
  },
  plugins: [],
};