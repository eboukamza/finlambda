import { compose, sum } from 'ramda'

import { taxDetail } from './taxDetail'

/**
 * create a function than calculate a tax with different tax brackets. If the tax do not have brackets, prefer rateAt()
 * @sig [Function] -> Number -> Number
 *
 * @see rateAt, forInterval, taxBracket
 *
 * @example
 *     const bracket1 = taxBracket(rateAt(0.1), forInterval(0, 2000)) // bracket1(5000)=> 200
 *     const bracket2 = taxBracket(rateAt(0.2), forInterval(2000)) // bracket2(5000)=> 600
 *
 *     tax([bracket1, bracket2])(5000)/ //=> 800
 */
export const tax = taxBrackets => compose(Math.ceil, sum, taxDetail(taxBrackets))
