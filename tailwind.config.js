/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        'text': {
          50: '#ecedf8',
          100: '#dadcf1',
          200: '#b5b8e3',
          300: '#8f95d6',
          400: '#6a72c8',
          500: '#454fba',
          600: '#373f95',
          700: '#292f70',
          800: '#1c1f4a',
          900: '#0e1025',
          950: '#070813',
        },
        'background': {
          50: '#ecedf9',
          100: '#d9daf2',
          200: '#b3b5e6',
          300: '#8c90d9',
          400: '#666bcc',
          500: '#4046bf',
          600: '#333899',
          700: '#262a73',
          800: '#191c4d',
          900: '#0d0e26',
          950: '#060713',
        },
        'primary': {
          50: '#ebecf9',
          100: '#d7d9f4',
          200: '#b0b3e8',
          300: '#888ddd',
          400: '#6167d1',
          500: '#3940c6',
          600: '#2e349e',
          700: '#222777',
          800: '#171a4f',
          900: '#0b0d28',
          950: '#060614',
        },
        'secondary': {
          50: '#eeeef7',
          100: '#ddddee',
          200: '#babcde',
          300: '#989acd',
          400: '#7579bd',
          500: '#5357ac',
          600: '#42468a',
          700: '#323467',
          800: '#212345',
          900: '#111122',
          950: '#080911',
        },
        'accent': {
          50: '#eaebfa',
          100: '#d6d8f5',
          200: '#adb0eb',
          300: '#8489e1',
          400: '#5b61d7',
          500: '#323acd',
          600: '#282ea4',
          700: '#1e237b',
          800: '#141752',
          900: '#0a0c29',
          950: '#050615',
        },
       },
      fontfamily: {
        display: 'Figtree, sans-serif'
      },
      borderRadius: {
        'none': '0',
        'sm': '.125rem',
        DEFAULT: '.25rem',
        'lg': '.5rem',
        'full': '100%',
      },
    },
  },
  plugins: [],
}

