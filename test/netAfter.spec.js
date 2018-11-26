import { netAfter } from '../src/netAfter'

describe('netAfter', () => {

  it('is the amount after substact a tax', () => {
    const tax = () => 100

    const result = netAfter(tax)(350)

    expect(result).toBe(250)
  })
})
