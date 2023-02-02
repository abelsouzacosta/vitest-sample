import { describe, it, expect } from 'vitest';
import { add } from '../math';

describe("add", () => {
  it("should return the sunm of the numbers inside the given array", () => {
    const numbers = [1, 2, 3]
    const result = add(numbers);
    expect(result).toBe(6);
  });
});