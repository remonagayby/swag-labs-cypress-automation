class LoginPage {
  // get username field
  get username() {
    return cy.get("#user-name");
  }

  // get password field
  get password() {
    return cy.get("#password");
  }

  // get login button field
  get loginButton() {
    return cy.get("#login-button");
  }

  // get error message
  get errorMessage() {
    return cy.get('[data-test="error"]');
  }

}

export default LoginPage;
