const simplifyNumber = int =>
  String(int)
    .split('')
    .reverse()
    .map((intString, index) => [Number(intString), 10 ** index])
    .filter(([amount]) => amount !== 0)
    .reverse()

export default simplifyNumber
