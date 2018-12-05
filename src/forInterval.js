/**
 * Create a function than calculate the amount between the bounds of the interval (min, max]. That means how much
 * money is concerned by the interval.
 * <br>
 * If max is not passed at function then input amount is considered as max so the bounds are (min, amount].
 *
 * @sig (Number, Number) -> Number -> Number
 *
 * @param {Number} min start of the interval
 * @param {Number} max end of the interval (optional, if not set use amount as max)
 * @returns {Function} The interval calculator
 *
 * @example
 *
 * const interval1000_2000 = forInterval(1000, 2000)
 * interval1000_2000(3000) // => 1000 all amount is in the interval
 * interval1000_2000(1500) // => 500 are in the interval
 * interval1000_2000(1000) // => 0 the amount out of interval
 *
 * // without max
 * const intervalFrom1000 = forInterval(1000)
 * intervalFrom1000(3000) // => 2000
 *
 */
const forInterval = (min, max) => amount => Math.max(Math.min(max || amount, amount) - min, 0)
export { forInterval }
