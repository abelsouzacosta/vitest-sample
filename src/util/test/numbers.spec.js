import { describe, it, expect } from 'vitest';
import { transformToNumber } from '../numbers';

describe("transformToNumber", () => {
  describe("Success Case", () => {
    it("should transform a string number to a integer number", () => {
      const numberString = '1';
      const result = transformToNumber(numberString);
      const expectedValue = +numberString;
      expect(result).toBe(expectedValue);
    });

    it("the result expected should be the type number", () => {
      const numberString = '1';
      const result = transformToNumber(numberString);
      expect(result).toBeTypeOf('number');
    });
  });

  describe("Fail Cases", () => {
    it("should throw an error if provided an invalid object", () => {
      const invalidString = 'invalid';
      const resultFn = () => {
        transformToNumber(invalidString);
      };
      expect(resultFn).toThrowError("A number string should be provided");
    });
  });
});