const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        background: 'var(--background)',
        'background-darker': 'var(--background-darker)',
        purple: 'var(--purple)',
        'purple-light': 'var(--purple-light)',
        yellow: 'var(--yellow)',
        green: 'var(--green)',
        'green-light': 'var(--green-light)',
        blue: 'var(--blue)',
        pink: 'var(--pink)',
        red: 'var(--red)',
        orange: 'var(--orange)',
        black: 'var(--black)',
        dark: 'var(--dark)',
        grey: 'var(--grey)',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.custom-bg-darker': {
          background: 'var(--background-darker)',
        },
      })
    }),
  ],
}
