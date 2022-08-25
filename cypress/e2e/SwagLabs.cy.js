import HomePage from "../pageObjects/Home.page";
import LoginPage from "../pageObjects/Login.page";
import InventoryPage from "../pageObjects/Inventory.page";
import InventoryItemPage from "../pageObjects/InventoryItem.page";
import CartPage from "../pageObjects/Cart.page";
import CheckoutPageOne from "../pageObjects/CheckoutStepOne.page";
import CheckoutPageTwo from "../pageObjects/CheckoutStepTwo.page";
import CheckoutComplete from "../pageObjects/CheckoutComplete.page";


describe("Swag Labs", () => {
  beforeEach(() => {
    LoginPage.visit();
  });
    let pswrd = "secret_sauce"
    let wrongPswrd = "wrong_secret_sauce"
  it("Scenario 1", () => {
    LoginPage.username.type("locked_out_user");
    LoginPage.password.type(pswrd);
    LoginPage.loginButton.click();
    LoginPage.errorMsg.should("contain.text", "Epic sadface: Sorry, this user has been locked out.")
  });
  it("Scenario 2", () => {
    LoginPage.username.type("standard_user");
    LoginPage.password.type(wrongPswrd);
    LoginPage.loginButton.click();
    LoginPage.errorMsg.should("contain.text", "Epic sadface: Username and password do not match any user in this service")
  });
context("Standart user Login", () => {
  beforeEach(() => {
    LoginPage.username.type("standard_user");
    LoginPage.password.type(pswrd);
    LoginPage.loginButton.click();
  })
    it("Scenario 3", () => {
      InventoryPage.inventoryItem.should("have.length", 6);
    })
    it("Scenario 4", () => {
      InventoryPage.sortButton.select("Price (high to low)");
      InventoryPage.inventoryItem.first().should("contain.text", "Sauce Labs Fleece Jacket");
      InventoryPage.inventoryItem.first().should("contain.text", "$49.99");
    })
    it("Scenario 5", () => {
      InventoryPage.sortButton.select("Price (low to high)");
      InventoryPage.inventoryItem.first().should("contain.text", "Sauce Labs Onesie");
      InventoryPage.inventoryItem.first().should("contain.text", "$7.99");
    })
    it("Scenario 6", () => {
      InventoryPage.sortButton.select("Name (Z to A)");
      InventoryPage.inventoryItem.first().should("contain.text", "Test.allTheThings() T-Shirt (Red)")
    })
    it("Scenario 7", () => {
      InventoryPage.item2.click();
      InventoryItemPage.AddButton.click();
      InventoryItemPage.shoppingCart.should("contain.text", 1);
      InventoryItemPage.backButton.click();
      InventoryPage.item0.click();
      InventoryItemPage.AddButton.click();
      InventoryItemPage.shoppingCart.should("contain.text", 2);
    })
    it("Scenario 8", () => {
      InventoryPage.item2.click();
      InventoryItemPage.AddButton.click();
      InventoryItemPage.shoppingCartBage.should("contain.text", 1);
      InventoryItemPage.backButton.click();
      InventoryPage.burgerButton.click();
      InventoryPage.resetButton.click();
      InventoryItemPage.shoppingCartBage.should("not.exist")
    })
    it("Scenario 9", () => {
      InventoryPage.item2.click();
      InventoryItemPage.AddButton.click();
      InventoryItemPage.shoppingCartBage.should("contain.text", 1);
      InventoryItemPage.removeButton.click();
      InventoryItemPage.shoppingCartBage.should("not.exist")
    })
    it.only("Scenario 10", () => {
      InventoryPage.item3.click();
      InventoryItemPage.AddButton.click();
      InventoryItemPage.shoppingCartBage.click();
      CartPage.chekoutButton.click();
      CheckoutPageOne.firstName.type("Kristaps");
      CheckoutPageOne.lastName.type("Kļava");
      CheckoutPageOne.zipCode.type("LV-1012");
      CheckoutPageOne.continueButton.click();
      CheckoutPageTwo.cartList.should("contain.text", "Test.allTheThings() T-Shirt (Red)")
      CheckoutPageTwo.finishButton.click();
      CheckoutComplete.completeHeader.should("have.text", "THANK YOU FOR YOUR ORDER")
    })
  })    
});
