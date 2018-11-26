/**
 *
 * Create a function than calculate the amount between the bounds of an interval (min, max]

 * @sig (Number, Number) -> Number -> Number
 * @param min
 * @param max (optional, if not set use amount as max)
 *
 * @example
 *
 *     const interval500_1000 = forInterval(500, 1000)
 *     forInterval1000_2000(3000) //=> 1000
 *     forInterval1000_2000(1000) // => 0
 *
 */
export const forInterval = (min, max) => amount => Math.max(Math.min(max || amount, amount) - min, 0)
