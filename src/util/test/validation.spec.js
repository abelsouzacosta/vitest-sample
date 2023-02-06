import { describe, it, expect } from 'vitest';
import { validateNumber, validateStringNotEmpty } from '../validation';

describe("validateStringNotEmpty", () => {
  it("should throw an error if the string provided is empty", () => {
    const stringParam = '';
    const resultFn = () => {
      validateStringNotEmpty(stringParam);
    };
    expect(resultFn).toThrowError("Invalid input - must not be empty.");
  });

  it("should throw an error if not provide a parameter", () => {
    const resultFn = () => {
      validateStringNotEmpty();
    };
    expect(resultFn).toThrowError("At least one argument must be provided")
  });

  it("should throw an error if provide a number instead of a string", () => {
    const number = 1;
    const resultFn = () => {
      validateStringNotEmpty(number);
    };
    expect(resultFn).toThrowError("A string must be provided");
  });
});