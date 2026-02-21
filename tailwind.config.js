/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: '#A1BC98',
          hover: '#A1BC98',
        },
        black: {
          DEFAULT: '#222222',
        },
        white: {
          DEFAULT: '#FFFFFF',
        },

        // Grey Scale
        grey: {
          DEFAULT: '#757575',
        },

        softgrey: {
          DEFAULT: '#D9D9D9',
        },
      },
      fontFamily: {
        poppins: ['Hedvig Letters Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
