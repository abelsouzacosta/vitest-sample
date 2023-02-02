import { describe, it, expect } from 'vitest';
import { extractNumbers } from '../parser';

describe("parser", () => {
  describe("extractNumbers", () => {
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
});