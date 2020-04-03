import { curry } from 'ramda'

/**
 * Calculate gross amount adding VAT tax
 * <br>
 * is currified
 *
 * @sig Function -> Number -> Number
 *
 * @param tax {Function} VAT tax
 * @param {Number} amount net price
 * @returns {Number} gross price
 *
 * @example
 *
 * grossOf(rateAt(0.2), 1000) // => 1200
 * grossOf(rateAt(0.2)(1000) // => 1200
 */
let grossOf = (tax, amount) => amount + tax(amount)
grossOf = curry(grossOf)
export { grossOf }
