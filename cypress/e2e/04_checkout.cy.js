import LoginPage from "../pages/login-page.cy";

let login = new LoginPage

beforeEach(() => {
    login.visitSwagLabs()
})

it('should be able to checkout', () => {
    login
        .typeValidUsername()
        .typeValidPassword()
        .validLoginClick()
        .selectAllItems()
        .clickCartButton()
        .assertItemsInCart()
        .clickCheckout()
        .assertCheckoutPage1Url()
        .assertCheckout1Header()
        .typeFirstName()
        .typeLastName()
        .typePostalCode()
        .clickContinue()
        .assertCheckoutPage2Url()
        .assertCheckout2Header()
        .assertItemsInCheckout()
        // .assert prices
        .clickFinish()
        .assertConfirmationUrl()
        .assertConfirmationHeader()
        .assertPageText()
        .clickBackHome()
})

it('should be able to click cancel and return to cart page', () => {
    login
        .typeValidUsername()
        .typeValidPassword()
        .validLoginClick()
        .selectRandomItem()
        .clickCartButton()
        .assertItemsInCart()
        .clickCheckout()
        .assertCheckoutPage1Url()
        .assertCheckout1Header()
        .typeFirstName()
        .typeLastName()
        .typePostalCode()
        .clickCancel()
        .assertCartPageUrl()
})

it('should not be able to checkout without entring valid data', () => {
    login
        .typeValidUsername()
        .typeValidPassword()
        .validLoginClick()
        .selectRandomItem()
        .clickCartButton()
        .assertItemsInCart()
        .clickCheckout()
        .assertCheckoutPage1Url()
        .assertCheckout1Header()
        .typeFirstName()
        // .typeLastName()
        // .typePostalCode()
        .clickContinue()
        .assertErrorMessage()
})