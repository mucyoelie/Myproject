/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}" // Ensures Tailwind processes all your files in the `src` directory
  ],
  darkMode: 'class', // Enables dark mode based on the 'dark' class
  theme: {
    extend: {}, // You can add custom themes or colors here if needed
  },
  plugins: [], // You can add plugins here if you use them (e.g., forms, typography)
};

