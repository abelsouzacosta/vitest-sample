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

describe('validateNumber', () => {
  it('should throw an error if the argument provided is not a number', () => {
    const argument = 'invalid';
    const resultFn = () => {
      validateNumber(argument);
    };
    expect(resultFn).toThrowError('Invalid number input.');
  });

  it('should not throw an error if the argument provided is a number', () => {
    const argument = 10000000000000000000000000;
    const resultFn = () => {
      validateNumber(argument);
    };
    expect(resultFn).not.toThrowError('Invalid number input.')
  })
})