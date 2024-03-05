/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      mob: '375px',
      dex: '1440px'
    },
    extend: {
      colors: {
        Orange: 'hsl(25, 97%, 53%)',
        White: 'hsl(0, 0%, 100%)',
        LightGrey: 'hsl(217, 12%, 63%)',
        MediumGrey: 'hsl(216, 12%, 54%)',
        DarkBlue: '#1C232D',
        VeryDarkBlue: 'hsl(216, 12%, 8%)',
        Chimney: '#262E3A',
        Ofade: '#F6BE92'
      },
      fontFamily: {
        over: ['Overpass']
      },
    },
  },
  plugins: [],
}

