import BasePage from "./Base.page";

class CheckoutPageTwo extends BasePage {
  static get url() {
    return "/checkout-step-two";
  }

  static get cartList() {
    return cy.get(".cart_list")
  }

  static get finishButton() {
    return cy.get("#finish")
  }

}

export default CheckoutPageTwo;