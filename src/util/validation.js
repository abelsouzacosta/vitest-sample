function validateString(value) {
  if (typeof value !== 'string')
    throw new Error("A string must be provided");
}

function validateUndefinedOrNullArgument(value) {
  if (value === undefined || value === null)
    throw new Error("At least one argument must be provided");
}

export function validateStringNotEmpty(value) {
  validateUndefinedOrNullArgument(value);
  validateString(value);
  if (value.trim().length === 0) {
    throw new Error('Invalid input - must not be empty.');
  }
}

export function validateNumber(number) {
  if (isNaN(number)) {
    throw new Error('Invalid number input.');
  }
}
