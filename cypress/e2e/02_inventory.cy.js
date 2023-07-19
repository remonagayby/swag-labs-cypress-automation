import LoginAssertions from "../assertions/login-assertions.cy"

let login = new LoginAssertions

beforeEach(() => {
    login.visitSwagLabs()
})

describe('Standard User Adding & Removing Items', () => {
    it('Should be able to select random item and go to cart page as a standard_user', () => {
        login
            .typeStandardUsername()
            .typeValidPassword()
            .validLoginClick()
            .assertInventoryPageUrl()
            .selectRandomItem()
            .clickCartButton()
            .assertCartPageUrl()
            .totalCartItems()
    })

    it('Should be able to add all items to the cart as a standard_user', () => {
        login
            .typeStandardUsername()
            .typeValidPassword()
            .validLoginClick()
            .assertInventoryPageUrl()
            .selectAllItems()
            .clickCartButton()
            .assertCartPageUrl()
            .totalCartItems()
    })

    it('Should be able to remove selected item from cart as a standard_user', () => {
        login
            .typeStandardUsername()
            .typeValidPassword()
            .validLoginClick()
            .assertInventoryPageUrl()
            .selectRandomItem()
            .removeItem()
    })
})

describe('Problem User Adding & Removing Items', () => {
    it('Should be able to add all items to the cart as a problem_user', () => {
        login
            .typeProblemUsername()
            .typeValidPassword()
            .validLoginClick()
            .assertInventoryPageUrl()
            .selectAllItems()
            .clickCartButton()
            .assertCartPageUrl()
            .totalCartItems()
    })

    it('Should be able to remove selected item from cart as a problem_user', () => {
        login
            .typeProblemUsername()
            .typeValidPassword()
            .validLoginClick()
            .assertInventoryPageUrl()
            .selectAllItems()
            .removeItem() // remove button is not clickable
    })
})

describe('Performance Glitch User Adding & Removing Items', () => {
    it('Should be able to select random item and go to cart page as a performance_glitch_user', () => {
        login
            .typePerformanceUsername()
            .typeValidPassword()
            .validLoginClick()
            .assertInventoryPageUrl()
            .selectRandomItem()
            .clickCartButton()
            .assertCartPageUrl()
            .totalCartItems()
    })

    it('Should be able to add all items to the cart as a performance_glitch_user', () => {
        login
            .typePerformanceUsername()
            .typeValidPassword()
            .validLoginClick()
            .assertInventoryPageUrl()
            .selectAllItems()
            .clickCartButton()
            .assertCartPageUrl()
            .totalCartItems()
    })

    it('Should be able to remove selected item from cart as a performance_glitch_user', () => {
        login
            .typePerformanceUsername()
            .typeValidPassword()
            .validLoginClick()
            .assertInventoryPageUrl()
            .selectRandomItem()
            .removeItem()
    })
})