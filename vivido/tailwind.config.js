/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{ts,tsx}", "./*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'grayprimary': '#3F4056',
        'redcherry': '#FF5659',
        'graylight': '#EDEDED',
        'greensecundary': '#929292',
        'gray-dark': '#273444',
        'bluelight': '#DAE9FF',
        'gray-light': '#d3dce6',
      },
      fontFamily: {
          primary: ['Montserrat_300Light', 'sans-serif'],
          light: ['Montserrat_400Regular', 'sans-serif'],
          primary: ['Montserrat_500Medium', 'sans-serif'],
          subtitle: ['Montserrat_600SemiBold', 'sans-serif'],
          title: ['Montserrat_700Bold', 'sans-serif'],
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    },
  },  
  plugins: [],
}