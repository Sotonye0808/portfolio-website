/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ff6b6b',
          dark: '#ff8787'
        },
        background: {
          light: '#f3f4f6',  // gray-100
          dark: '#1f2937'    // gray-800
        },
        surface: {
          light: '#ffffff',
          dark: '#374151'    // gray-700
        },
        text: {
          light: '#111827',  // gray-900
          dark: '#f9fafb'    // gray-50
        },
        accent: {
          default: 'goldenrod',
          hover: '#daa520'
        }
      },
      fontFamily: {
        primary: ['Roboto', 'sans-serif'],
        heading: ['Roboto', 'sans-serif']
      },
      fontSize: {
        'heading-1': ['2.5rem', { lineHeight: '3rem', fontWeight: '800' }],
        'heading-2': ['2rem', { lineHeight: '2.5rem', fontWeight: '700' }],
        'heading-3': ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }],
        'body-bold': ['1rem', { lineHeight: '1.5rem', fontWeight: '700' }],
      }
    },
  },
  plugins: [],
}