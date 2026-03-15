/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",            // Scans all HTML files in your root folder
    "./src/**/*.{js,ts}",  // Scans all JS/TS files in a src folder (if you have one)
    "./index.html"         // Explicitly scans your main file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}