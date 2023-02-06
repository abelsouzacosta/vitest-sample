import { describe, it, expect } from 'vitest';
import { add } from '../math';

describe("add", () => {
  describe("Success Cases", () => {
    it("should return the sum of the numbers inside the given array", () => {
      const numbers = [1, 2, 3]
      const result = add(numbers);
      const expectedValue = numbers.reduce((acc, current) => acc + current, 0);
      expect(result).toEqual(expectedValue);
    });
  })

  describe("Fail Cases", () => {
    it("should throw an error if an a invalid object is given as the parameter", () => {
      const invalidArray = [1, "a", 2];
      const resultFn = () => {
        add(invalidArray)
      }
      expect(resultFn).toThrowError("Invalid argument in the given array");
    });

    it("should return an error if an a empty arrays is given", () => {
      const empty = [];
      const resultFn = () => {
        add(empty);
      };
      expect(resultFn).toThrowError("An non empty array should be provided")
    });

    it("should return error if an argument is not given",  () => {
      const resultFn = () => {
        add();
      }
      expect(resultFn).toThrowError("An array should be provided");
    });

    it("should throw an error if an invalid argument is given", () => {
      const invalidArgument = {
        number1: 1,
        number2: 2
      };
      const resultFn = () => {
        add(invalidArgument);
      };
      expect(resultFn).toThrowError("An array should be provided");
    });

    it("should throw an error if provided multiple arguments instead of an array", () => {
      const number1 = 1;
      const number2 = 2;
      const resultFn = () => {
        add(number1, number2);
      };
      expect(resultFn).toThrowError("An array should be provided");
    });
  })
});