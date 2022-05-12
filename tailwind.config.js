module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'movie-green': '#48CFAD',
        'movie-gray': '#4F5A69'
      }
    },
  },
  plugins: [require('daisyui')],
}
