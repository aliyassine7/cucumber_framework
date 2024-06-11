class SmartBearWebOrderPage {
  /*Locators*/
  getCheckAllButton() {
    return cy.get('#ctl00_MainContent_btnCheckAll')
  }

  getUncheckAllButton() {
    return cy.get('#ctl00_MainContent_btnUncheckAll')
  }

  getDeleteButton() {
    return cy.get('#ctl00_MainContent_btnDelete')
  }

  getCheckBoxes() {
    return cy.get('[type="checkbox"]')
  }

  getListOfOrdersEmptyMessage() {
    return cy.get('#ctl00_MainContent_orderMessage')
  }

  getMenu() {
    return cy.get('#ctl00_menu a')
  }

  getQuantity() {
    return cy.get('#ctl00_MainContent_fmwOrder_txtQuantity')
  }

  getAddressFields() {
    return cy.get(
      `#ctl00_MainContent_fmwOrder_txtName, 
      #ctl00_MainContent_fmwOrder_TextBox2,
      #ctl00_MainContent_fmwOrder_TextBox3,
      #ctl00_MainContent_fmwOrder_TextBox5`,
    )
  }

  getPaymentFields() {
    return cy.get(
      `#ctl00_MainContent_fmwOrder_TextBox6, 
       #ctl00_MainContent_fmwOrder_TextBox1`,
    )
  }

  getVisaCard() {
    return cy.get('#ctl00_MainContent_fmwOrder_cardList_0')
  }

  getProcessButton() {
    return cy.get('#ctl00_MainContent_fmwOrder_InsertButton')
  }

  /*Methods*/
  clickCheckAllButton() {
    this.getCheckAllButton().click()
  }

  clickUncheckAllButton() {
    this.getUncheckAllButton().click()
  }

  clickMenuItemByLabel(label) {
    this.getMenu().contains(label).click()
  }
}

module.exports = SmartBearWebOrderPage
