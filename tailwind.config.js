/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#39ff14',

          'neon-blue': '#00FFFF',
          'neon-pink': '#FF00FF'//
      },
      textShadow: {
        'neon-green': '0 0 8px rgba(57, 255, 20, 1), 0 0 15px rgba(57, 255, 20, 0.8)',
      },
    },
  },
  plugins: [],
}