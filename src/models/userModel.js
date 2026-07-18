class User {
  constructor({ id, name, email, token } = {}) {
    this.id = id ?? null;
    this.name = name ?? "";
    this.email = email ?? "";
    this.token = token ?? null;
  }

  isAuthenticated() {
    return !!this.token;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
    };
  }
}

export default User;
