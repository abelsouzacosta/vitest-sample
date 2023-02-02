import { describe, it, expect } from 'vitest';
import { extractNumbers } from '../parser';

describe("parser", () => {
  describe("extractNumbers", () => {
    describe("Success Cases", () => {
      it("should return an array with the two numbers given in the request body", () => {
        const request = {
          body: {
            num1: 10,
            num2: 20
          }
        }
        const result = extractNumbers(request);
        expect(result).toStrictEqual([10, 20]);
      });
    });

    describe("Fail Cases", () => {
      it("should throw an error if is given an invalid request", () => {
        const invalidRequest = {};
        const resultFn = () => {
          extractNumbers(invalidRequest);
        }
        expect(resultFn).toThrowError("An invalid request is given");
      });
    });
  });
});