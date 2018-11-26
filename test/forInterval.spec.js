import { forInterval } from '../src/forInterval'

describe('forInterval', () => {

  it('should never be negative', () => {
    const amount = -100
    const result = forInterval(0, 100)(amount)

    expect(result).toBe(0)
  })

  it('max is optional', () => {
    const amount = 1000
    const result = forInterval(99)(amount)

    expect(result).toBe(901)
  })

  it('should return interval between min and max', () => {
    const amount = 1000
    const result = forInterval(20, 80)(amount)

    expect(result).toBe(60)
  })

  it('should return zero when the amount is not in the interval', () => {
    let amount = 10
    let result = forInterval(20, 80)(amount)

    expect(result).toBe(0)
  })
})
