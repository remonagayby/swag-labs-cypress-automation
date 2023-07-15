import LoginPage from "../pages/login-page.cy"

let login = new LoginPage

beforeEach(() => {
  login.visitSwagLabs()
})

it('should be able to select random item and go to cart page', () => {
    login
        .typeValidUsername()
        .typeValidPassword()
        .validLoginClick()
        .assertInventoryPageUrl()
        .selectRandomItem()
        .clickCartButton()
        .assertCartPageUrl()
        .assertItemsInCart()
})

it('Should be able to add all items to the cart', () => {
    login
        .typeValidUsername()
        .typeValidPassword()
        .validLoginClick()
        .assertInventoryPageUrl()
        .selectAllItems()
        .clickCartButton()
        .assertCartPageUrl()
        .assertItemsInCart()
})

it('Should be able to remove selected item from cart', () => {
    login
    .typeValidUsername()
    .typeValidPassword()
    .validLoginClick()
    .assertInventoryPageUrl()
    .selectRandomItem()
})