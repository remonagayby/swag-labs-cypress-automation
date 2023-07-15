import LoginPage from "../pages/login-page.cy"

let login = new LoginPage

beforeEach(() => {
  login.visitSwagLabs()
})

it('Should be able to click on remove button', () => {
  login
  .typeValidUsername()
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

it('Should be able to click on checkout button', () => {
    login
    .typeValidUsername()
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