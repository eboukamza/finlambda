import { tax } from '../src/tax'
import { taxBracket } from '../src/taxBracket'
import { forInterval } from '../src/forInterval'
import { rateAt } from '../src/rateAt'

describe('tax', () => {

  it('is the sum of apply each bracket', () => {
    const bracket1 = taxBracket(rateAt(0.1), forInterval(0, 2000))
    const bracket2 = taxBracket(rateAt(0.2), forInterval(2000))
    const result = tax([ bracket1, bracket2 ])(5000)

    expect(result).toBe(800)
  })
})
