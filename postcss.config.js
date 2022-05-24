const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
    plugins: [
      new autoprefixer(),
      new cssnano({ preset: 'default' }),
    ]
  };