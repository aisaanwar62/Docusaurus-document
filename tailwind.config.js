/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./docs/**/*.{md,mdx}",
    "./docusaurus.config.{js,ts}",
    "./blog/**/*.{md,mdx}",
    "./sidebars.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar"),
    // other plugins
  ],
};
