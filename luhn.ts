export default class Luhn {
  static valid(input: string) {
    const normalized = Luhn.normalize(input)

    if (normalized.length <= 1) {
      return false
    }

    return Luhn.sum(normalized) % 10 === 0
  }

  static normalize(input: string) {
    return input.replace(/\s/g, "")
  }

  static sum(input: string) {
    let sum = 0

    for (let i = 0; i < input.length; i++) {
      sum += Luhn.valueIn(input, i)
    }

    return sum
  }

  static valueIn(input: string, i: number) {
    let value = Number(input[input.length - i - 1])

    if (i % 2 !== 0) {
      value *= 2
    }

    if (value > 9) {
      value -= 9
    }

    return value
  }
}
