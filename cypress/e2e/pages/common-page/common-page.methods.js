import { CommomPageElements } from "./common-page.elements";
import { CommonPageData } from "./common-page.data";
import { expect } from "chai";

export class CommonPageMethods {
  static navigateToDemoBlaze() {
    cy.clearCookies();
    cy.visit(CommonPageData.url);
  }
  static clickOnHomeOption() {
    CommomPageElements.topMenu.home.click();
  }
  static clickOnContactOption() {
    CommomPageElements.topMenu.contact.click();
  }
  static clickOnAboutUsOption() {
    CommomPageElements.topMenu.aboutUs.click();
  }
  static clickOnCartOption() {
    CommomPageElements.topMenu.cart.click();
  }
  static clickOnLoginOption() {
    CommomPageElements.topMenu.login.click();
  }
  static clickOnSignupOption() {
    CommomPageElements.topMenu.signup.click();
  }

  static verifyAlert(expectedMessage) {
    cy.on("window:alert", (str) => {
      expect(str).to.equal(expectedMessage);
    });
  }

  static generateRandomString(length = 10) {
    var result = "";
    var characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }
}
