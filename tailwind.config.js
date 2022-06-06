const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat'],
        'body': ['Montserrat'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
