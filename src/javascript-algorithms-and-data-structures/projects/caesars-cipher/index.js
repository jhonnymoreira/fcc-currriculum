import { rotateLetter } from './utils'

const rot13 = text =>
  text.replace(/[A-Z]/g, letter => rotateLetter(letter, 13))

export default rot13
