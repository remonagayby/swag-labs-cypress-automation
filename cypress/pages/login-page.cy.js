import { faker } from "@faker-js/faker";
import InventoryPage from "./inventory-page.cy";

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

  // visit swag labs website
  visitSwagLabs() {
    cy.visit("");

    return this;
  }

  // type standard_user inside username field
  typeStandardUsername() {
    cy.fixture("loginData").then((users) => {
      this.username
        .should("have.attr", "placeholder", "Username")
        .type(users.validUsernames[0])
        .as("standard_user");
    });
    return this;
  }

  // type performance_glitch_user username inside username field
  typePerformanceUsername() {
    cy.fixture("loginData").then((users) => {
      this.username
        .should("have.attr", "placeholder", "Username")
        .type(users.validUsernames[1])
        .as("performance_glitch");
    });
    return this;
  }

  // type locked_out_user username inside username field
  typeLockedUsername() {
    cy.fixture("loginData").then((users) => {
      this.username
        .should("have.attr", "placeholder", "Username")
        .type(users.invalidUsernames)
        .as("locked_out_user");
    });
    return this;
  }

  // type problem_user username inside username field
  typeProblemUsername() {
    cy.fixture("loginData").then((users) => {
      this.username
        .should("have.attr", "placeholder", "Username")
        .type(users.validUsernames[2])
        .as("problem_user");
    });
    return this;
  }

  // type valid password inside password field
  typeValidPassword() {
    // type the valid password provided in loginData.json
    cy.fixture("loginData").then(password => {
      this.password
        .should("have.attr", "placeholder", "Password")
        .type(password.userpassword)
        .as("password");
    });
    return this;
  }

  // type invalid password inside password field
  typeInvalidPassword() {
    // create a fake password
    this.password
      .should("have.attr", "placeholder", "Password")
      .type(faker.internet.password());

    return this;
  }

  // assert empty username placeholder color
  assertUsernameColor() {
    this.username.should("have.css", "border-bottom-color", "rgb(226, 35, 26)");

    return this;
  }

  // assert empty username placeholder color
  assertPasswordColor() {
    this.password.should("have.css", "border-bottom-color", "rgb(226, 35, 26)");

    return this;
  }

  // assert error message
  assertErrorMessage() {
    if (this.username === "") 
        this.errorMessage
          .should("be.visible")
          .and("eq", "Epic sadface: Username is required");
    else if (this.password === "")
        this.errorMessage
            .should("be.visible")
            .and("eq", "Epic sadface: Password is required");
    
    else if (this.username === '@locked_out_user' && this.password === '@password')
        this.errorMessage
            .should("be.visible")
            .and("eq", "Epic sadface: Sorry, this user has been locked out.");

    else if (this.username === '' && this.password === '@password')
        this.errorMessage
            .should("be.visible")
            .and("eq", "Epic sadface: Username and password do not match any user in this service");
    
    return this;
  }

  // click on login button with valid credentials to redirect to inventory page
  validLoginClick() {
    this.loginButton.should("have.value", "Login").click();

    return new InventoryPage();
  }

  // click on login button without valid credentials to stay into same page
  invalidLoginClick() {
    this.loginButton.should("have.value", "Login").click();

    return this;
  }
}

export default LoginPage;
