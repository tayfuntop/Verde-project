/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'main-color': "#f1f1f1"
      },
      scale: {
        '101': '1.01',
        '102': '1.02',
        '103': '1.03',
      },
      keyframes: {
        'left-right': {
          '0%': {
            scale: '0',
            left: '0',
          },
          '50%': {
            scale: '1',
          },
          '80%': {
            scale: '1',
          },
          '100%': {
            scale: '0',
          },
        },
      },
      animation: {
        'left-right': 'left-right 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
