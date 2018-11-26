import { curry } from 'ramda'

/**
 * Calculate the value of apply a tax for a given amount
 *
 * Currified
 * Internal
 * @sig Number -> Function -> Number
 *
 * @example
 *     const tax = rateAt(0.2)
 *     const taxApply(1000)(rateAt(0.2)) //=> 200
 */
export const taxApply = curry((amount, tax) => tax(amount))
