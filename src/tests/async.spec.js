import { describe, expect, it } from 'vitest';
import { generateToken, generateTokenPromise } from '../async';

describe("generateToken", () => {
  it("should generate a token", (done) => {
    const email = "mail@mail.com";
    const jwtRegex = /^(?:[\w-]*\.){2}[\w-]*$/
    generateToken(email, (err, token) => {
      try {
        expect(token).toMatch(jwtRegex);
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});

describe("generateTokenPromise", () => {
  it("should generate a token", () => {
    const email = "mail@mail.com";
    expect(generateTokenPromise(email)).resolves.toMatch(/^(?:[\w-]*\.){2}[\w-]*$/);
  });
});