import { netOf} from '../src/netOf';

describe('netOf', () => {
  it('return the net price of a gross value', () => {
    const result = netOf(0.2)(1200)

    expect(result).toBe(1000)
  })
})
