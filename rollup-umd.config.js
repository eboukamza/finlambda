import {terser as uglify} from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'
const pkg = require('./package.json')

const banner = `//  FinLambda v${pkg.version}'
//  ${pkg.homepage}
//  (c) 2018 - Elias Boukamza'
//  FinLambda may be freely distributed under the MIT license.
`

var config = {
  input: 'src/index.js',
  output: {
    format: 'umd',
    name: 'FinLambda',
    exports: 'named',
    banner: banner,
    external: [ 'ramda' ],
    globals: {ramda: 'R'}
  },
  plugins: [
    babel()
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  )
}

module.exports = config
