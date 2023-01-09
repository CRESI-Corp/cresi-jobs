/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors:{
      //Color palette of the website
      'Dominant': '#F7FCFF',
      'Primary': '#34495E',
      'Secondary': '#32746D',
      'Text': '#1E262C',
      'Subtext': '#C2C2C2',
      'Negative': '#E74C3',
      'Mid-negative': '#E67E22',

    }
  },
  plugins: [],
}
