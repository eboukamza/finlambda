import { taxDetail } from '../src/taxDetail'
import { taxBracket } from '../src/taxBracket'
import { rateAt } from '../src/rateAt'
import { forInterval } from '../src/forInterval'

describe('taxDetail', () => {

  it('is the tax apply of each bracket', () => {

    const bracket1 = taxBracket(rateAt(0.1), forInterval(0, 2000))
    const bracket2 = taxBracket(rateAt(0.2), forInterval(2000))
    const result = taxDetail([ bracket1, bracket2 ])(5000)

    expect(result).toEqual([ 200, 600 ])
  })
})
