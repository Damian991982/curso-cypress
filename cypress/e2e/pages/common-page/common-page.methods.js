import { commonPageData } from "./common-page.data";
import { commomPageElements } from "./common-page.elements";

export class commonPageMethods {
  static navigateToDemoBlaze() {
    cy.visit(commonPageData.url);
  }
  static clickOnHomeOption() {
    commomPageElements.topMenu.home.click();
  }
  static clickOnContactOption() {
    commomPageElements.topMenu.contact.click();
  }
  static clickOnAboutUsOption() {
    commomPageElements.topMenu.aboutUs.click();
  }
  static clickOnCartOption() {
    commomPageElements.topMenu.cart.click();
  }
  static clickOnLoginOption() {
    commomPageElements.topMenu.login.click();
  }
  static clickOnSignupOption() {
    commomPageElements.topMenu.signup.click();
  }
}
