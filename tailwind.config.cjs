/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        'b-3': '0 0 3px 3px rgba(0,0,0,0.1)',
      },
      spacing: {
        't-113': '113%' // top : 113 % 
      },
      height: {
        '29rem': '29rem',
        '26rem': '26rem',
        '40rem': '40rem',
      },
      width: {
        '29rem': '29rem',
        '26rem': '26rem',
        "30rem":'30rem',
        '475px':'475px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}