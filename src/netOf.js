import { curry } from 'ramda'

/**
 * Calculate net amount of a price subtracting VAT tax
 * <br>
 * is currified
 *
 * @param {Number} rate VAT rate (decimal from 0 to 1)
 * @param {Number} amount gross price
 * @returns {number} net price
 *
 * @example
 *
 * netOf(0.2, 1200) // => 1000
 * netOf(0.2)(1200) // => 1000
 *
 */
let netOf = (rate, amount) => amount / (rate + 1)
netOf = curry(netOf)
export { netOf }
