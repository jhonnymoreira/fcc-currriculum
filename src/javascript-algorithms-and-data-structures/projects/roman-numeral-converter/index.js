import {
  generateRomanSymbol,
  simplifyNumber,
} from './utils'

const convertToRoman = number =>
  simplifyNumber(number)
    .map(place => generateRomanSymbol(...place))
    .join('')

export default convertToRoman
