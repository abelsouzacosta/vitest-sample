import { validateNumber, validateStringNotEmpty } from './validation';

function validateArgument(value) {
  if (Number.isNaN(+value))
    throw new Error("A number string should be provided");
}

export function transformToNumber(value) {
  validateArgument(value);
  return +value;
}

export function cleanNumbers(numberValues) {
  const numbers = [];
  for (const value of numberValues) {
    validateStringNotEmpty(value);
    const number = transformToNumber(value);
    validateNumber(number);
    numbers.push(number);
  }
  return numbers;
}