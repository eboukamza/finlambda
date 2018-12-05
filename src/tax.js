import { compose, sum } from 'ramda'

import { taxDetail } from './taxDetail'

/**
 * @export
 * Create a function to calculate a tax as the sum of applying each tax bracket (progressive rates).
 *
 * <br>
 * If the tax do not have brackets, consider use simplest {@link rateAt}
 * @sig [Function] -> Number -> Number
 *
 * @param {Array} taxBrackets
 * @return {Function} The tax function
 *
 * @example
 *
 * // 10% for the first 2000 e
 * const bracket1 = taxBracket(rateAt(0.1), forInterval(0, 2000)) // bracket1(5000)=> 200
 * // 20% form 2000 e
 * const bracket2 = taxBracket(rateAt(0.2), forInterval(2000)) // bracket2(5000)=> 600
 *
 * tax([bracket1, bracket2])(5000)/ //=> 800
 *
 * @see {@link rateAt}, {@link forInterval}, {@link taxBracket}
 */
const tax = taxBrackets => compose(Math.ceil, sum, taxDetail(taxBrackets))
export { tax }
