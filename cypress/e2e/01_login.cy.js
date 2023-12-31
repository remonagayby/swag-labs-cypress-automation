import LoginAssertions from "../assertions/login-assertions.cy"

let login = new LoginAssertions

beforeEach(() => {
  login.visitSwagLabs()
})

describe('Invalid Login', () => {
  it('Should not be able to login with empty credentials', () => {
    login
      .invalidLoginClick()
      .assertUsernameColor()
      .assertPasswordColor()
      .assertErrorMessage()
  })

  it('Should not be able to login with valid name and empty password', () => {
    login
      .typeStandardUsername()
      .invalidLoginClick()
      .assertPasswordColor()
      .assertErrorMessage()
  })

  it('Should not be able to login with locked_out_user and valid password', () => {
    login
      .typeLockedUsername()
      .typeValidPassword()
      .invalidLoginClick()
      .assertErrorMessage()
  })

  it('Should not be able to login with valid name and invalid password', () => {
    login
      .typeStandardUsername()
      .typeInvalidPassword()
      .invalidLoginClick()
      .assertErrorMessage()
  })
})

describe('Valid Login', () => {
  it('Should be able to login with standard username and valid password', () => {
    login
      .typeStandardUsername()
      .typeValidPassword()
      .validLoginClick()
      .assertInventoryPageUrl()
  })

  it('Should be able to login with performance username and valid password', () => {
    login
      .typePerformanceUsername()
      .typeValidPassword()
      .validLoginClick()
      .assertInventoryPageUrl()
  })

  it('Should be able to login with problem_user and valid password', () => {
    login
      .typeProblemUsername()
      .typeValidPassword()
      .validLoginClick()
      .assertInventoryPageUrl()
  })
})