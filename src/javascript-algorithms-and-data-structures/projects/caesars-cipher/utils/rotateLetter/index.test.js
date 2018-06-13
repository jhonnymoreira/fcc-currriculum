import rotateLetter from '.'

test('utils.rotateLetter', () => {
  expect(rotateLetter('A', 0)).toEqual('A')
  expect(rotateLetter('A', 7)).toEqual('H')
  expect(rotateLetter('S', 0)).toEqual('S')
  expect(rotateLetter('S', 2)).toEqual('U')
  expect(rotateLetter('Z', 1)).toEqual('A')
  expect(rotateLetter('S', 13)).toEqual('F')
  expect(rotateLetter('Z', 26)).toEqual('Z')
})
