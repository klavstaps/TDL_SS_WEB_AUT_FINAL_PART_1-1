import BasePage from "./Base.page";

class CheckoutComplete extends BasePage {
  static get url() {
    return "/checkout-complete";
  }

  static get completeHeader() {
    return cy.get(".complete-header")
  }

}

export default CheckoutComplete;