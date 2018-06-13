import eachCons from '../eachCons'

const ROMAN_NUMERALS = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M',
}

const NUMERALS_RANGE = eachCons(Object.keys(ROMAN_NUMERALS))
  .map(range => range.map(Number))

const generateRomanSymbol = (amount, leftPlaceWeight) => {
  if (
    amount > 1 &&
    leftPlaceWeight === 1000
  ) {
    return ROMAN_NUMERALS[leftPlaceWeight].repeat(amount)
  }

  const number = amount * leftPlaceWeight
  const romanNumeralNumber = ROMAN_NUMERALS[number]

  if (romanNumeralNumber !== undefined) {
    return romanNumeralNumber
  }

  const [[min, max]] = NUMERALS_RANGE.filter(([rangeMin, rangeMax]) =>
    rangeMin < number && rangeMax > number)

  const amountToMax = max - number
  const lowerRomanNumeral = ROMAN_NUMERALS[amountToMax]

  if (lowerRomanNumeral !== undefined) {
    return lowerRomanNumeral + ROMAN_NUMERALS[max]
  }

  const minToNumber = number - min

  const remainderAmount = minToNumber / leftPlaceWeight
  const remainderRomanNumerals = ROMAN_NUMERALS[leftPlaceWeight].repeat(remainderAmount)

  return ROMAN_NUMERALS[min] + remainderRomanNumerals
}

export default generateRomanSymbol
