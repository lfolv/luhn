export default class Luhn {
  static valid(input: string) {
    if (input.length <= 1) {
      return false
    }

    return true
  }
}
