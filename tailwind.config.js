/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          'dark-blue': '#1F4068',
          'darker-blue': '#162447',
          'navy-blue': '#1B1B2F',
          'red-accent': '#E43F5A',
        },
        fontFamily: {
          'jost': ['Jost', 'sans-serif'],
          'quicksand': ['Quicksand', 'sans-serif'],
        },
        animation: {
          'text-clip': 'textclip 2s linear infinite',
          'slide-in-left': 'slideInLeft 1s ease-in-out',
          'slide-in-top': 'slideInTop 1s ease-in-out',
          'slide-in-bottom': 'slideInBottom 1s ease-in-out',
        },
        keyframes: {
          textclip: {
            'to': { backgroundPosition: '200% center' },
          },
          slideInLeft: {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(0)' },
          },
          slideInTop: {
            '0%': { transform: 'translateY(-10%)', opacity: '0' },
            '100%': { transform: 'translateY(0)' },
          },
          slideInBottom: {
            '0%': { transform: 'translateY(10%)', opacity: '0' },
            '100%': { transform: 'translateY(0)' },
          },
        },
      },
    },
    plugins: [],
  }