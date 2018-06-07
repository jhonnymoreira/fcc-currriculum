/* eslint-disable no-useless-escape */
import palindrome from '.'

test('palidrome', () => {
  expect(palindrome('eye')).toBeTruthy()
  expect(palindrome('_eye')).toBeTruthy()
  expect(palindrome('race car')).toBeTruthy()
  expect(palindrome('not a palindrome')).toBeFalsy()
  expect(palindrome('A man, a plan, a canal. Panama')).toBeTruthy()
  expect(palindrome('never odd or even')).toBeTruthy()
  expect(palindrome('nope')).toBeFalsy()
  expect(palindrome('almostomla')).toBeFalsy()
  expect(palindrome('My age is 0, 0 si ega ym.')).toBeTruthy()
  expect(palindrome('1 eye for of 1 eye.')).toBeFalsy()
  expect(palindrome('0_0 (: /-\ :) 0-0')).toBeTruthy()
  expect(palindrome('five|\_/|four')).toBeFalsy()
})
