import babel from 'rollup-plugin-babel'

const banner = require('./banner');

module.exports = {
  input: 'src/index.js',
  output: {
    format: 'es',
    banner: banner
  },
  plugins: [
    babel()
  ]
}
