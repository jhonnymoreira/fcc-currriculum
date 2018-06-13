import eachCons from '.'

test('utils.eachCons', () => {
  expect(eachCons([1, 2])).toEqual([[1, 2]])

  expect(eachCons([1, 2, 3, 4])).toEqual([
    [1, 2],
    [2, 3],
    [3, 4],
  ])

  expect(eachCons([
    [1, 2],
    [1, 4],
    [1, 5],
  ])).toEqual([
    [[1, 2], [1, 4]],
    [[1, 4], [1, 5]],
  ])

  expect(eachCons([1])).toEqual([])
})
