import { without } from './without'

test('should return a new list without values in the first argument ', () => {
  const itemsToOmit = [ 'A', 'B', 'C' ]
  const collection = [ 'A', 'B', 'C', 'D', 'E', 'F' ]

  expect(without(itemsToOmit, collection)).toStrictEqual([ 'D', 'E', 'F' ])
  expect(without(itemsToOmit)(collection)).toStrictEqual([ 'D', 'E', 'F' ])
})

test('ramda test', () => {
  expect(without([ 1, 2 ])([ 1, 2, 1, 3, 4 ])).toStrictEqual([ 3, 4 ])
})
