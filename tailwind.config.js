module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        roxo: {
          300: "#996DFF",
          500: "#8257E5"
        },
        darkGray: {
          500: "#18181B"
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ],
}
