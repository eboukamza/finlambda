import { map } from 'ramda'
import { taxApply } from './taxApply'

/**
 * Create a function that calculate the tax of each tax bracket
 *
 * @sig [Function] -> Number -> [Number]
 *
 * @param {Array} taxBracket
 * @return {Function}
 *
 * @example
 *
 * const bracket1 = taxBracket(rateAt(0.1), forInterval(0, 2000)) // bracket1(5000)=> 200
 * const bracket2 = taxBracket(rateAt(0.2), forInterval(2000)) // bracket2(5000)=> 600
 *
 * taxDetail([bracket1, bracket2])(5000) //=> [200, 600]
 *
 * @see {@link taxApply}, {@link tax}
 */
const taxDetail = taxBracket => amount => map(taxApply(amount), taxBracket)
export { taxDetail }
