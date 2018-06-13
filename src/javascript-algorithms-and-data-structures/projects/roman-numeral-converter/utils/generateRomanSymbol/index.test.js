import generateRomanSymbol from '.'

test('utils.generateRomanSymbol', () => {
  expect(generateRomanSymbol(1, 1)).toEqual('I')
  expect(generateRomanSymbol(5, 1)).toEqual('V')
  expect(generateRomanSymbol(1, 10)).toEqual('X')
  expect(generateRomanSymbol(5, 10)).toEqual('L')
  expect(generateRomanSymbol(1, 100)).toEqual('C')
  expect(generateRomanSymbol(5, 100)).toEqual('D')
  expect(generateRomanSymbol(1, 1000)).toEqual('M')

  expect(generateRomanSymbol(4, 1)).toEqual('IV')
  expect(generateRomanSymbol(9, 1)).toEqual('IX')
  expect(generateRomanSymbol(4, 10)).toEqual('XL')
  expect(generateRomanSymbol(9, 10)).toEqual('XC')
  expect(generateRomanSymbol(4, 100)).toEqual('CD')
  expect(generateRomanSymbol(9, 100)).toEqual('CM')

  expect(generateRomanSymbol(3, 1)).toEqual('III')
  expect(generateRomanSymbol(3, 10)).toEqual('XXX')
  expect(generateRomanSymbol(3, 100)).toEqual('CCC')
  expect(generateRomanSymbol(3, 1000)).toEqual('MMM')

  expect(generateRomanSymbol(8, 1)).toEqual('VIII')
  expect(generateRomanSymbol(8, 10)).toEqual('LXXX')
  expect(generateRomanSymbol(8, 100)).toEqual('DCCC')
})
