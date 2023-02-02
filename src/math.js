function arrayIsNotEmpty(arr) {
  if (arr.length === 0)
    throw new Error("An non empty array should be provided");
}

function validateElements(arr) {
  return arr.map(element => {
    if (typeof element !== "number")
      throw new Error("Invalid argument in the given array");
  });
}

function validateArray(arr) {
  if (typeof arr === 'undefined' || !Array.isArray(arr)) throw new Error("An array should be provided");
  arrayIsNotEmpty(arr);
  validateElements(arr);
}

export function add(numbers) {
  validateArray(numbers);
  return numbers.reduce((accumulator, current) => accumulator + current, 0);
}
