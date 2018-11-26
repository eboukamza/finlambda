import { taxBracket } from '../src/taxBracket'
import { forInterval } from '../src/forInterval'
import { rateAt } from '../src/rateAt'

describe('taxBracket', () => {

  it('should apply rate for an interval', () => {
    let amount = 3000
    let result = taxBracket(rateAt(0.2), forInterval(1000, 2000))(amount)

    expect(result).toBe(200)
  })
})
