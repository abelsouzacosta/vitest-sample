export class ArrayValidator  {
  static arrayIsNotEmpty(arr) {
    if (arr.length === 0)
      throw new Error("An non empty array should be provided");
  }

  static validateElements(arr) {
    return arr.map(element => {
      if (typeof element !== "number")
        throw new Error("Invalid argument in the given array");
    });
  }

  static validateArray(arr) {
    if (typeof arr === 'undefined' || !Array.isArray(arr)) throw new Error("An array should be provided");
    ArrayValidator.arrayIsNotEmpty(arr);
    ArrayValidator.validateElements(arr);
  }
}