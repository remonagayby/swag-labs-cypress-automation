import LoginPage from "../pages/login-page.cy"

let login = new LoginPage

beforeEach(() => {
  login.visitSwagLabs()
})

describe('Standard User Shopping Cart', () => {
  it('Should be able to click on remove button as a standard_user', () => {
    login
      .typeStandardUsername()
      .typeValidPassword()
      .validLoginClick()
      .assertInventoryPageUrl()
      .selectAllItems()
      .clickCartButton()
      .assertCartPageUrl()
      .assertCartPageHeader()
      .assertItemsInCart()
      .clickRemoveButton()
      .assertItemsInCart()
  })

  it('Should be able to click on checkout button as a standard_user', () => {
    login
      .typeStandardUsername()
      .typeValidPassword()
      .validLoginClick()
      .assertInventoryPageUrl()
      .selectRandomItem()
      .clickCartButton()
      .assertCartPageUrl()
      .assertCartPageHeader()
      .assertItemsInCart()
      .clickCheckout()
  })
})

describe('Problem User Shopping Cart', () => {
  it('Should be able to click on remove button as a problem_user', () => {
    login
      .typeProblemUsername()
      .typeValidPassword()
      .validLoginClick()
      .assertInventoryPageUrl()
      .selectRandomItem()
      .clickCartButton()
      .assertCartPageUrl()
      .assertCartPageHeader()
      .assertItemsInCart()
      .clickRemoveButton()
      .assertItemsInCart()
  })

  it('Should be able to click on checkout button as a problem_user', () => {
    login
      .typeProblemUsername()
      .typeValidPassword()
      .validLoginClick()
      .assertInventoryPageUrl()
      .selectRandomItem()
      .clickCartButton()
      .assertCartPageUrl()
      .assertCartPageHeader()
      .assertItemsInCart()
      .clickCheckout()
  })
})

describe('Performance Glitch User Shopping Cart', () => {
  it('Should be able to click on remove button as a performance_glitch_user', () => {
    login
      .typePerformanceUsername()
      .typeValidPassword()
      .validLoginClick()
      .assertInventoryPageUrl()
      .selectAllItems()
      .clickCartButton()
      .assertCartPageUrl()
      .assertCartPageHeader()
      .assertItemsInCart()
      .clickRemoveButton()
      .assertItemsInCart()
  })

  it('Should be able to click on checkout button as a performance_glitch_user', () => {
    login
      .typePerformanceUsername()
      .typeValidPassword()
      .validLoginClick()
      .assertInventoryPageUrl()
      .selectRandomItem()
      .clickCartButton()
      .assertCartPageUrl()
      .assertCartPageHeader()
      .assertItemsInCart()
      .clickCheckout()
  })
})
