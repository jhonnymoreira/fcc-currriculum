import removeNonAlphaNumericChars from '.'

test('utils.removeNonAlphaNumericChars', () => {
  expect(removeNonAlphaNumericChars('$_ !^%A935BC;"')).toEqual('A935BC')
})
