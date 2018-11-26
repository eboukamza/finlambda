import { curry } from 'ramda'

/**
 * Calculate the amount of a tax rate.
 *
 * Currified
 *
 * @sig Number -> Number -> Number
 *
 * @example
 *
 *     rateAt(0.2)(1000) //=> 200
 *     rateAt(0,2, 1000) //=> 200
 */
export const rateAt = curry((rate, amount) => amount * rate)
