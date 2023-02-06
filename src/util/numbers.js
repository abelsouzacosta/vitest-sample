function validateArgument(value) {
  if (Number.isNaN(+value))
    throw new Error("A number string should be provided");
}

export function transformToNumber(value) {
  validateArgument(value);
  return +value;
}

