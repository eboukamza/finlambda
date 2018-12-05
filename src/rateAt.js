import { curry } from 'ramda'

/**
 * Calculate the amount of a tax rate.
 * <br>
 * is currified
 *
 * @sig Number -> Number -> Number
 * @param {Number} rate decimal from 0 to 1
 * @param {Number} amount
 * @return {Number}
 * @example
 *
 * rateAt(0.2)(1000) //=> 200
 * rateAt(0,2, 1000) //=> 200
 *
 */
let rateAt = (rate, amount) => amount * rate
rateAt = curry(rateAt)
export { rateAt }
