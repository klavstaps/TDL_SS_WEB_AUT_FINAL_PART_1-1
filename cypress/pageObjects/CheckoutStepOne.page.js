import BasePage from "./Base.page";

class CheckoutPageOne extends BasePage {
  static get url() {
    return "/checkout-step-one";
  }

  static get firstName() {
    return cy.get("[placeholder='First Name']")
  }

  static get lastName() {
    return cy.get("[placeholder='Last Name']")
  }

  static get zipCode() {
    return cy.get("[placeholder='Zip/Postal Code']")
  }

  static get continueButton() {
    return cy.get("#continue")
  }

}

export default CheckoutPageOne;