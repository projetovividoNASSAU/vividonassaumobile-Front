/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{ts,tsx}", "./*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },  
  plugins: [],
}