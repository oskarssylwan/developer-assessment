import { uniqueById } from './unique-by-id'

describe('uniqueById()', () => {

  describe('is called with a falsey value', () => {
    it('must return an empty array', () => {
      expect(uniqueById(undefined)).toEqual([])
    })
  })

  describe('is called with an array', () => {

    it('must not mutate original array', () => {
      const input = [{ id: 'foo', }, { id: 'bar' }]
      const output = uniqueById(input)
      expect(input).toEqual([{ id: 'foo', }, { id: 'bar' }])
      expect(input).not.toBe(output)
    })

    describe(`is called with an array containing multiple elements
      with the same id prop`, () => {
      it('must remove all but one (1) elements with the same id prop', () => {
        const elements = [{ id: 'foo', }, { id: 'foo' }, { id: 'bar' }]
        expect(uniqueById(elements)).toEqual([{ id: 'foo', }, { id: 'bar' }])
      })
    })

  })

})
