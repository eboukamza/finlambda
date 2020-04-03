import { curry } from 'ramda'

/**
 * Calculate net amount of a price subtracting VAT tax
 * <br>
 * is currified
 *
 * @param rate VAT rate
 * @param amount gross price
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
