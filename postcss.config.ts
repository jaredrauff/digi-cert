import * as postcss from 'postcss';

const plugins: postcss.Plugin[] = [
  require('tailwindcss'),
  require('autoprefixer'),
];

export default {
  plugins,
};
