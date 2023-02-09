import { it, expect, describe, beforeAll } from 'vitest';
import { User } from '../User';

describe("User", () => {
  let user;
  beforeAll(() => {
    user = new User('mail@mail.com');
  });

  describe("getEmail", () => {
    it("should return the user's email", () => {
      const email = user.getEmail();
      expect(email).toBe('mail@mail.com');
    });
  });

  describe("updateEmail", () => {
    it("should update the user's email", () => {
      const oldEmail = user.getEmail();
      const newEmail = 'new@mail.com';
      user.updateEmail(newEmail);
      const userEmail = user.getEmail();
      expect(userEmail).toBe(newEmail);
      expect(userEmail).not.toBe(oldEmail);
    })
  });

  describe("cleanEmail", () => {
    it("should clear the user's email", () => {
      user.clearEmail();
      const clearedUserEmail = user.getEmail();
      expect(clearedUserEmail).toBe('');
    })
  });
})