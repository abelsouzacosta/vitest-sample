import { ArrayValidator } from "./util/ArrayValidator";

export function add(numbers) {
  ArrayValidator.validateArray(numbers);
  return numbers.reduce((accumulator, current) => accumulator + current, 0);
}
