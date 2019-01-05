const pkg = require('../package.json')

// to be added for each output file on build
module.exports = `//  FinLambda v${pkg.version}
//  ${pkg.homepage}
//  (c) 2018 - Elias Boukamza'
//  FinLambda may be freely distributed under the MIT license.
`
