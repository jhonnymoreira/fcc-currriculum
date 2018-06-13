const eachCons = (array) => {
  // eslint-disable-next-line prefer-const
  let result = []

  let currentIndex = 0

  while (currentIndex < array.length - 1) {
    const currentElement = array[currentIndex]
    currentIndex += 1
    const nextElement = array[currentIndex]

    result.push([currentElement, nextElement])
  }

  return result
}

export default eachCons
