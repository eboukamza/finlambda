import { curry } from 'ramda'

/**
 * Calculate the net amount after apply a tax.
 * <br>
 * is currified
 *
 * @sig Function -> Number -> Number
 * @param {Function} tax to be applied
 * @param {Number} amount gross value
 * @return {Number} net value after tax
 *
 * @example
 *
 * netAfter(rateAt(0.2), 1000) //=> 800
 * netAfter(rateAt(0.2))(1000) //=> 800
 *
 */
let netAfter = (tax, amount) => amount - tax(amount)
netAfter = curry(netAfter)
export { netAfter }
