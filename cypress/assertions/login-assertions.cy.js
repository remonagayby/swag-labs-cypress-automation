import { faker } from "@faker-js/faker";
import LoginPage from "../pages/login-page.cy"
import InventoryAssertions from "./inventory-assertions.cy";

let loginPage = new LoginPage

class LoginAssertions {
    // visit swag labs website
    visitSwagLabs() {
        cy.visit("");

        // clear any saved data or caches in the browser
        cy.clearCookies();
        cy.clearLocalStorage();

        return this;
    }

    // type standard_user inside username field
    typeStandardUsername() {
        cy.fixture("loginData").then((users) => {
        loginPage
            .username
            .should("have.attr", "placeholder", "Username")
            .type(users.validUsernames[0]).as("standard_user");
        });
        return this;
    }

    // type performance_glitch_user username inside username field
    typePerformanceUsername() {
        cy.fixture("loginData").then((users) => {
        loginPage
            .username
            .should("have.attr", "placeholder", "Username")
            .type(users.validUsernames[1])
            .as("performance_glitch");
        });
        return this;
    }

    // type locked_out_user username inside username field
    typeLockedUsername() {
        cy.fixture("loginData").then((users) => {
        loginPage
            .username
            .should("have.attr", "placeholder", "Username")
            .type(users.invalidUsernames)
            .as("locked_out_user");
        });
        return this;
    }

    // type problem_user username inside username field
    typeProblemUsername() {
        cy.fixture("loginData").then((users) => {
        loginPage
            .username
            .should("have.attr", "placeholder", "Username")
            .type(users.validUsernames[2])
            .as("problem_user");
        });
        return this;
    }

    // type valid password inside password field
    typeValidPassword() {
        // type the valid password provided in loginData.json
        cy.fixture("loginData").then((password) => {
        loginPage
            .password
            .should("have.attr", "placeholder", "Password")
            .type(password.userpassword)
            .as("password");
        });
        return this;
    }

    // type invalid password inside password field
    typeInvalidPassword() {
        // create a fake password
        loginPage
        .password
        .should("have.attr", "placeholder", "Password")
        .type(faker.internet.password());

        return this;
    }

    // assert empty username placeholder color
    assertUsernameColor() {
        loginPage
            .username
            .should("have.css", "border-bottom-color", "rgb(226, 35, 26)");

        return this;
    }

    // assert empty username placeholder color
    assertPasswordColor() {
        loginPage
            .password
            .should("have.css", "border-bottom-color", "rgb(226, 35, 26)");

        return this;
    }

    // assert error message
    assertErrorMessage() {
        if (loginPage.username === "")
        loginPage
            .errorMessage
            .should("be.visible")
            .and("eq", "Epic sadface: Username is required");
        else if (loginPage.password === "")
        loginPage
            .errorMessage
            .should("be.visible")
            .and("eq", "Epic sadface: Password is required");
        else if (
        loginPage.username === "@locked_out_user" &&
        loginPage.password === "@password"
        )
        loginPage
            .errorMessage
            .should("be.visible")
            .and("eq", "Epic sadface: Sorry, this user has been locked out.");
        else if (loginPage.username === "" && loginPage.password === "@password")
        loginPage
            .errorMessage
            .should("be.visible")
            .and(
            "eq",
            "Epic sadface: Username and password do not match any user in this service"
            );

        return this;
    }

    // click on login button with valid credentials to redirect to inventory page
    validLoginClick() {
        loginPage
            .loginButton
            .should("have.value", "Login")
            .and("be.visible")
            .and("be.enabled")
            .click();

        return new InventoryAssertions();
    }

    // click on login button without valid credentials to stay into same page
    invalidLoginClick() {
        loginPage
            .loginButton
            .should("have.value", "Login")
            .and("be.visible")
            .and("be.enabled")
            .click();

        return this;
    }
}

export default LoginAssertions