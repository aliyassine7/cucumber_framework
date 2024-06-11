const SmartBearWebOrderPage = require('./smartBearWebOrderPage')
const smartBearWebOrderPage = new SmartBearWebOrderPage()

class SmartBearLoginPage extends SmartBearWebOrderPage {
  /*Locators*/
  getUsername() {
    return cy.get('#ctl00_MainContent_username')
  }

  getPassword() {
    return cy.get('#ctl00_MainContent_password')
  }

  getLoginButton() {
    return cy.get('#ctl00_MainContent_login_button')
  }

  getErrorMessage() {
    return cy.get('#ctl00_MainContent_status')
  }

  /*Methods*/
  getButton(button) {
    switch (button) {
      case 'Login':
        return this.getLoginButton()
      case 'Check All':
        return smartBearWebOrderPage.getCheckAllButton()
      case 'Uncheck All':
        return smartBearWebOrderPage.getUncheckAllButton()
      case 'Delete Selected':
        return smartBearWebOrderPage.getDeleteButton()
      case 'Process':
        return smartBearWebOrderPage.getProcessButton()
    }
  }

  typeUsername(username) {
    this.getUsername().type(username)
  }

  typePassword(password) {
    this.getPassword().type(password)
  }
}

module.exports = SmartBearLoginPage
