const ALPHABET_LENGTH = 26

const rotateLetter = (letter, rotation) => {
  const startCodePoint = 'A'.charCodeAt(0)
  const endCodePoint = 'Z'.charCodeAt(0)
  const letterCodePoint = letter.charCodeAt(0)

  const normalizedRotation = rotation % ALPHABET_LENGTH
  const rotationCodePoint = letterCodePoint + normalizedRotation

  return (rotationCodePoint > endCodePoint)
    ? String.fromCodePoint((startCodePoint + (rotationCodePoint - endCodePoint)) - 1)
    : String.fromCodePoint(rotationCodePoint)
}

export default rotateLetter
