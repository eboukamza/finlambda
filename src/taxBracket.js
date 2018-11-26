import { compose } from 'ramda'

/**
 * Create a function than apply a rate for an interval.
 *
 * @sig (Function, Function) -> Function
 * @see rateAt, forInterval
 *
 * @example
 *
 *     taxBracket(rateAt(0.2), forInterval(1000, 2000))(3000) //=> 200
 */
export const taxBracket = (rateAt, forInterval) => compose(rateAt, forInterval)
