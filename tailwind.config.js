/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react')

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: { argentum: 'argentum-sans, monospace' }
    }
  },
  darkMode: 'class',
  // const buttonColorMap = { Gasto: 'danger', Ahorro: 'secondary'}

  plugins: [
    nextui({
      darkMode: 'class',
      addCommonColors: true,
      themes: {
        'transaction-colors': {
          extend: 'dark',
          colors: {
            warning: {
              50: '#19190c',
              100: '#4c4c24',
              200: '#807f3c',
              300: '#999847',
              400: '#b3b153',
              500: '#fffd77',
              600: '#fffd85',
              700: '#fffd92',
              800: '#fffea0',
              900: '#fffebb',
              DEFAULT: '#fffd77',
              foreground: '#000000'
            },
            primary: {
              50: '#001914',
              100: '#004c3d',
              200: '#00997b',
              300: '#00b390',
              400: '#00cca4',
              500: '#00ffcd',
              600: '#33ffd7',
              700: '#4dffdc',
              800: '#80ffe6',
              900: '#99ffeb',
              DEFAULT: '#00ffcd',
              foreground: '#000000'
            },
            secondary: {
              50: '#09050e',
              100: '#13091c',
              200: '#251238',
              300: '#2f1746',
              400: '#412062',
              500: '#5d2e8c',
              600: '#6d4398',
              700: '#8e6daf',
              800: '#ae97c6',
              900: '#beabd1',
              DEFAULT: '#6d4398',
              foreground: '#fff'
            },
            danger: {
              50: '#180b08',
              100: '#30160f',
              200: '#5f2b1f',
              300: '#8f412e',
              400: '#a74c36',
              500: '#d66145',
              600: '#f07b5f',
              700: '#f39882',
              800: '#f5a794',
              900: '#f8c4b8',
              DEFAULT: '#d66145',
              foreground: '#fff'
            }
          }
        }
      }
    })
  ]
}
