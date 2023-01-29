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
        'perfect-purple': '#202450'
      },
      height: {
        '18': '4.5rem'
      },
      borderRadius: {
        'xl': '0.9rem'
      },
    },
  },
  plugins: [],
}
