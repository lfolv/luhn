export default class Luhn {
  static valid(input: string) {
    if (input.length <= 1) {
      return false
    }

    let sum = 0

    for (let i = 0; i < input.length; i++) {
      let value = Number(input[input.length - i - 1])

      if (i % 2 !== 0) {
        value *= 2
      }

      if (value > 9) {
        value -= 9
      }

      console.log(value)
      sum += value
    }

    return sum % 10 === 0
  }
}
