/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1a1b3c',
        'extremely-dark-blue' : '#13142c',
        'super-extremely-dark-blue':'#12132a',
        'light-blue': '#323acb',
        'light-purple': '#38387f',
        'perfect-blue': '#545acc',
        'perfect-purple': '#202450',
        'perfect-gray': '#1e293b',
        'dark-gray':'#111827',
        'btc': '#f7931a',
        'eth': '#627eea',
        'usdt': '#26a17b',
        'stone': '#464b57',
      },
      height: {
        '18': '4.5rem',
        '14': '2.5rem'
      },
      width: {
        'xs': '20rem',
        'sm': '24rem',
        'md': '28rem',
        'lg': '32rem',
        'xl': '36rem',
        '82': '22rem',
        '86': '26rem'
      },
      borderRadius: {
        'xl': '0.9rem'
      },
      boxShadow: {
        '5xl': '0 -1px 35px -2px rgb(0 0 0 / 0.1)'
      },
      zIndex: {
        '100': '100',
      }
    },
  },
  plugins: [],
}
