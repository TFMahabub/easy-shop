/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: '#099d84',
      DarkPrimary: '#007e69',
      LightPrimary: '#dafff9',
      secondary: '#22C55E',
      third: '#0F172A',
      gray: '#6B7280',
      lightGray: '#dadada',
      white: '#fff',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
