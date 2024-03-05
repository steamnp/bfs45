export const addOdd = (array) =>
  array.reduce((sum, number) => {
    if (number % 2 !== 0) {
      return sum + number
    }

    return sum
  }, 0)

export const isPrime = (number) => {
  if (number < 2) return false

  for (let i = 2; i * i <= number; i++) {
    if (number % i !== 0) {
      return true
    }

    return false
  }
}
