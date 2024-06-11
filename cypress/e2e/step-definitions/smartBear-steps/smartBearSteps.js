const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')
const SmartBearLoginPage = require('../../../pages/smartBearLoginPage')
const SmartBearWebOrderPage = require('../../../pages/smartBearWebOrderPage')
const smartBearWebOrderPage = new SmartBearWebOrderPage()
const smartBearLoginPage = new SmartBearLoginPage()

Given(/^user is on "([^"]*)"$/, (url) => {
  cy.visit(url)
})

When(/^user enters username as "([^"]*)"$/, (username) => {
  smartBearLoginPage.typeUsername(username)
})

When(/^user enters password as "([^"]*)"$/, (password) => {
  smartBearLoginPage.typePassword(password)
})

When(/^user clicks on "([^"]*)" button$/, (button) => {
  smartBearLoginPage.getButton(button).click()
})

Then(/^user should see "([^"]*)" message$/, (message) => {
  smartBearLoginPage.getErrorMessage().should('have.text', message)
})

Then(/^user should be routed to "([^"]*)"$/, (url) => {
  cy.url(url)
})

Then(/^validate below menu items are displayed$/, (dataTable) => {
  const arr = dataTable.rawTable.flat()

  smartBearWebOrderPage.getMenu().each(($el) => {
    cy.wrap($el).should('contain', arr[index])
  })
})

Then(/^all rows should be checked$/, () => {
  smartBearWebOrderPage.getCheckBoxes().should('be.checked')
})

Then(/^all rows should be unchecked$/, () => {
  smartBearWebOrderPage.getCheckBoxes().should('not.be.checked')
})

Then(/^validate all orders are deleted from the List of All Orders$/, () => {
  smartBearWebOrderPage.getCheckBoxes().should('have.length', 0)
})

Then(/^validate user sees "([^"]*)" message$/, (message) => {
  smartBearWebOrderPage.getListOfOrdersEmptyMessage().should('include.text', message)
})

When(/^user clicks on "([^"]*)" menu item$/, (menuItem) => {
  smartBearWebOrderPage.clickMenuItemByLabel(menuItem)
})

Then(/^user enters all product information$/, () => {
  smartBearWebOrderPage.getQuantity().clear().type('1')
})

Then(/^user enters all address information$/, (dataTable) => {
  const addressInfo = dataTable.rawTable.flat()

  smartBearWebOrderPage.getAddressFields().each(($el, index) => {
    cy.wrap($el).clear().type(addressInfo[index])
  })
})

Then(/^user enters all payment information$/, (dataTable) => {
  const paymentInfo = dataTable.rawTable.flat()

  smartBearWebOrderPage.getVisaCard().click()

  smartBearWebOrderPage.getPaymentFields().each(($el, index) => {
    cy.wrap($el).clear().type(paymentInfo[index])
  })
})
