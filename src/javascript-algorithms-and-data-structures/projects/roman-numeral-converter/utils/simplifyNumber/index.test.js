import simplifyNumber from '.'

test('utils.simplifyNumber', () => {
  expect(simplifyNumber(2004)).toEqual([
    [2, 1000],
    [4, 1],
  ])

  expect(simplifyNumber(1995)).toEqual([
    [1, 1000],
    [9, 100],
    [9, 10],
    [5, 1],
  ])
})
