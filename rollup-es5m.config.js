import babel from 'rollup-plugin-babel'

const pkg = require('./package.json')

const banner = `//  FinLambda v${pkg.version}
//  ${pkg.homepage}
//  (c) 2018 - Elias Boukamza'
//  FinLambda may be freely distributed under the MIT license.
`

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
