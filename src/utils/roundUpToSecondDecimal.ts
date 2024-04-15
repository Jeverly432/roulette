export const roundUpToSecondDecimal = (num: number) => {
  return (Math.ceil(num * 100) / 100).toFixed(1)
}
