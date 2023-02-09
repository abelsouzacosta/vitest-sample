export class User {
  constructor(email) {
    Object.assign(this, { email });
  }

  getEmail() {
    return this.email;
  }

  updateEmail(newEmail) {
    this.email = newEmail;
  }

  clearEmail() {
    this.email = '';
  }
}