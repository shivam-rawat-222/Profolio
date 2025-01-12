/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#121212', // Your custom name
        SideBarBg: '#1E1E1F',
        NavBarBg: '#282829'

      },
    },
  },
  plugins: [],
}



