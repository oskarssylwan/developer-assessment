import { clamp } from './clamp'

describe('clamp()', () => {

  describe('clamp is called with a number larger than the max value provided', () => {
    it('must return the max value', () => {
      expect(clamp(0)(1)(2)).toEqual(1)
    })
  })

  describe('clamp is called with a number smaller than the min value provided', () => {
    it('must return the max value', () => {
      expect(clamp(0)(1)(-1)).toEqual(0)
    })
  })

  describe('clamp is called with a number that falls between the provided range', () => {
    it('must return the max value', () => {
      expect(clamp(0)(2)(1)).toEqual(1)
    })
  })

  
})
