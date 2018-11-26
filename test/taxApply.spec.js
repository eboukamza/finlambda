import { taxApply } from '../src/taxApply'

describe('taxApply', () => {

  it('should calculate the tax amount of a tax', () => {
    const tax = (amount) => amount * 0.1

    const result = taxApply(1000)(tax)

    expect(result).toBe(100)
  })
})
