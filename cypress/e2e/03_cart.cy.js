import LoginAssertions from "../assertions/login-assertions.cy"

let login = new LoginAssertions

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
      .totalCartItems()
      .clickRemoveButton()
      .totalCartItems()
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
      .totalCartItems()
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
      .totalCartItems()
      .clickRemoveButton()
      .totalCartItems()
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
      .totalCartItems()
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
      .totalCartItems()
      .clickRemoveButton()
      .totalCartItems()
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
      .totalCartItems()
      .clickCheckout()
  })
})
