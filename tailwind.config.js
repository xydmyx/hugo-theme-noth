/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#d4eaf7",
        "primary-200": "#b6ccd8",
        "primary-300": "#3b3c3d",
        "background-100": "#fffefb",
        "background-200": "#f5f4f1",
        "background-300": "#cccbc8",
        "text-100": "#1d1c1c",
        "text-200": "#313d44",
        "accent-100": "#71c4ef",
        "accent-200": "#00668c"
      },
      fontFamily: {
        "main": ["-apple-system", "Times New Roman", "Noto Serif SC", "Songti SC", "serif"],
        "title": ["-apple-system", "Times New Roman", "Noto Serif SC", "Songti SC", "serif"],
        "serif": ["-apple-system", "Times New Roman", "Noto Serif SC", "Songti SC", "serif"]
      },
      typography: {
        css: {
          fontFamily: {
            DEFAULT: ["-apple-system", "Times New Roman", "Noto Serif SC", "Songti SC", "serif"]
          }
        }
      }
    },
  },
  plugins: [
      require('@tailwindcss/typography'),
  ],
}