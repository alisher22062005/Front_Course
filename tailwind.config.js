/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"], // 'Inter' is the font-family name from Google Fonts
        kanit: ["Kanit"], // 'Kanit' is the font-family name from Google Fonts
        // Add other custom font families as needed
      },
    },
  },
  plugins: [],
};
