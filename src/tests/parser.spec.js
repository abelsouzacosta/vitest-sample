import { describe, it, expect } from 'vitest';
import { extractNumbers, extractResultQueryParam } from '../parser';

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

      it("should throw an error if argument num1 is not given", () => {
        const invalidRequest = {
          body: {
            num2: 20
          }
        };
        const resultFn = () => {
          extractNumbers(invalidRequest);
        };
        expect(resultFn).toThrowError("Argument num1 should be provided inside request body attribute");
      });

      it("should throw an error if argument num2 is not given", () => {
        const invalidRequest = {
          body: {
            num1: 20
          }
        };
        const resultFn = () => {
          extractNumbers(invalidRequest);
        };
        expect(resultFn).toThrowError("Argument num2 should be provided inside request body attribute");
      });
    });
  });

  describe("extractResultQueryParam", () => {
    describe("Success Case", () => {
      it("should extract result from query parameter", () => {
        const request = {
          query: {
            result: 10
          }
        };
        const result = extractResultQueryParam(request);
        expect(result).toBe(request.query.result);
      })
    })
  })
});