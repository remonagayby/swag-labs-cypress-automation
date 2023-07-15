import LoginPage from "../pages/login-page.cy"

let login = new LoginPage

beforeEach(() => {
  login.visitSwagLabs()
})

describe('Standard User Confirmation Page', () => {
  it('Should get a thank you message after complete purchase and click back home', () => {
    login
    .typeStandardUsername()
    .typeValidPassword()
    .validLoginClick()
    .selectAllItems()
    .clickCartButton()
    .assertItemsInCart()
    .clickCheckout()
    .typeFirstName()
    .typeLastName()
    .typePostalCode()
    .clickContinue()
    .clickFinish()
    .assertConfirmationUrl()
    .assertConfirmationHeader()
    .assertPageText()
    .clickBackHome()
    .assertInventoryPageUrl()
  })
})

describe('Performance Glitch User Confirmation Page', () => {
  it('Should get a thank you message after complete purchase and click back home', () => {
    login
    .typePerformanceUsername()
    .typeValidPassword()
    .validLoginClick()
    .selectAllItems()
    .clickCartButton()
    .assertItemsInCart()
    .clickCheckout()
    .typeFirstName()
    .typeLastName()
    .typePostalCode()
    .clickContinue()
    .clickFinish()
    .assertConfirmationUrl()
    .assertConfirmationHeader()
    .assertPageText()
    .clickBackHome()
    .assertInventoryPageUrl()
  })
})