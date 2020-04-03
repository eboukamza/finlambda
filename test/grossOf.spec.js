import { rateAt } from '../src/rateAt'
import { grossOf } from '../src/grossOf'

describe('grossOf', () => {
  it('return the gross price of a net amount', () => {
    const tax = rateAt(0.2)

    const result = grossOf(tax)(1000)

    expect(result).toBe(1200)
  })
})
