import { compose } from 'ramda'

/**
 * Create a function than apply a tax rate for an interval.
 *
 * @sig (Function, Function) -> Function
 *
 * @param {Function} rateAt tax rate
 * @param {Function} forInterval bracket
 * @return {Function}
 *
 * @example
 *
 * taxBracket(rateAt(0.2), forInterval(1000, 2000))(3000) //=> 200
 *
 * @see {@link rateAt}, {@link forInterval}
 */
const taxBracket = (rateAt, forInterval) => compose(rateAt, forInterval)
export { taxBracket }
