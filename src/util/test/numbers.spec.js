import { describe, it, expect } from 'vitest';
import { cleanNumbers, transformToNumber } from '../numbers';

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

describe('cleanNumbers', () => {
  describe('Success Case', () => {
    it('should return an array of numbers if an array of string numbers is provided', () => {
      const arrayStringNumbers = ['1', '2', '3', '4', '5'];
      const result = cleanNumbers(arrayStringNumbers);
      const expectedResult = arrayStringNumbers.map(string => parseInt(string));
      expect(result).toStrictEqual(expectedResult);
      expect(result).toContain(expectedResult[0]);
      expect(result[0]).toBeTypeOf('number');
    });
  })

  describe('Fail cases', () => {
    it('should throw an error if at least one of the elements of array provided is not a string number', () => {
      const argument = ['1', '2', 'invalid', '4', '5'];
      const resultFn = () => {
        cleanNumbers(argument);
      };
      expect(resultFn).toThrowError('A number string should be provided');
    });
  });
});