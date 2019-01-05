const banner = require('./banner');

module.exports = {
  input: 'src/index.js',
  output: {
    format: 'es',
    banner: banner,
  }
}
