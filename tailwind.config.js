module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#F0B90B',
        secondary: '#283046',
      },
    },
  },
  plugins: [require('autoprefixer')],
};
