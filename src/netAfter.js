import { curry } from 'ramda'

/**
 * Calculate the net amount after apply a tax
 *
 * Currified
 *
 * @sig Function -> Number -> Number
 *
 * @example
 *
 *     netAfter(rateAt(0.2), 1000) //=> 800
 */
export const netAfter = curry((tax, amount) => amount - tax(amount))
