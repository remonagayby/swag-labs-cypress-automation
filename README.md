# Automated Test Scripts for Swag Labs Web Application

This project contains automated test scripts for Swag Labs Web Application. The scripts are developed using Cypress and JavaScript.

## Prerequisites

- A code editor of your choice, e.g. Visual Studio Code.

## Installation

1. Clone the repository.
2. Navigate to the project directory in your terminal.
3. Run the following command to install the dependencies:

```bash
npm install
```

## Usage

1. Replace the values of `username` and `password` in the `cypress.json` file with your Swag Labs account credentials.
2. Run the following command to open Cypress:

```bash
npm cypress open
```

3. Click on the test script you want to run in the Cypress Test Runner.

## Scenarios Covered

The following scenarios are covered in the automated test scripts:

1. Login
   - Positive scenario (valid credentials)
   - Negative scenario (invalid credentials)
2. Adding and removing items to the cart
3. Checkout process

## Contributing

Contributions are welcome. Please fork the repository and submit a pull request.
