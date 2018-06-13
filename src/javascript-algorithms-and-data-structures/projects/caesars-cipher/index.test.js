import rot13 from '.'

test('rot13', () => {
  expect(rot13('SERR PBQR PNZC')).toEqual('FREE CODE CAMP')
  expect(rot13('SERR CVMMN!')).toEqual('FREE PIZZA!')
  expect(rot13('SERR YBIR?')).toEqual('FREE LOVE?')
  expect(rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.'))
    .toEqual('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.')
})
