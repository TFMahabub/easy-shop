/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: '#E30047',
      DarkPrimary: '#C8003E',
      LightPrimary: '#ffccdc',
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
