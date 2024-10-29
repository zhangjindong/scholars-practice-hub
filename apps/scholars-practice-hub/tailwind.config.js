const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        java: {
          50: '#f2fbfa',
          100: '#d3f4f2',
          200: '#a7e8e5',
          300: '#72d6d4',
          400: '#49bbbd',
          500: '#2c9ca0',
          600: '#217a80',
          700: '#1e6367',
          800: '#1c4f53',
          900: '#1c4145',
          950: '#0a2629',
        },
      },
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/container-queries'),
  ],
};
