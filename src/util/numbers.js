export function transformToNumber(value) {
  if (Number.isNaN(+value))
    throw new Error("A number string should be provided");

  return +value;
}

