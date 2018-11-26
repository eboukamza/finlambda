import { rateAt } from '../src/rateAt'

describe('rateAt', () => {

  it('return the rate', () => {
    const result = rateAt(0.2)(1000)

    expect(result).toBe(200)
  })
})
