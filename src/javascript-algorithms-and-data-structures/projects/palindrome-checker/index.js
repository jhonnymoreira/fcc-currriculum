import {
  removeNonAlphaNumericChars,
  reverseString,
} from './utils'

const palindrome = (text) => {
  const normalizedText = removeNonAlphaNumericChars(text)

  return reverseString(normalizedText).toLowerCase() === normalizedText.toLowerCase()
}

export default palindrome
