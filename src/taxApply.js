import { curry } from 'ramda'

/**
 * Calculate the tax amount after apply a tax.
 * <br>
 * is currified
 * <br>
 * is internal
 * @sig Number -> Function -> Number
 *
 * @param {Number} amount profit imposed on tax
 * @param {Function} tax function witch calculate the tax
 * @return {Number} tax amount
 *
 * @example
 *
 * const tax = rateAt(0.2)
 * const taxApply(1000)(rateAt(0.2)) //=> 200
 */
let taxApply = (amount, tax) => tax(amount)
taxApply = curry(taxApply)
export { taxApply }
