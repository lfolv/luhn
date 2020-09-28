export default class Luhn {
  static valid(input: string) {
    const normalized = input.replace(/\s/g, "")

    if (normalized.length <= 1) {
      return false
    }

    let sum = 0

    for (let i = 0; i < normalized.length; i++) {
      let value = Number(normalized[normalized.length - i - 1])

      if (i % 2 !== 0) {
        value *= 2
      }

      if (value > 9) {
        value -= 9
      }

      sum += value
    }

    return sum % 10 === 0
  }
}
