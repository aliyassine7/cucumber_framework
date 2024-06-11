const { When, Then } = require('@badeball/cypress-cucumber-preprocessor')

When(/^user search for "([^"]*)"$/, (link) => {
  cy.get('#APjFqb').type(`${link}{enter}`)
})
