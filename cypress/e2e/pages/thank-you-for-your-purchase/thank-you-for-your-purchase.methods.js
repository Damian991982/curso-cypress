import { ThankYouForYourPurchaseElements } from "./thank-you-for-your-purchase.elements";

export class ThankYouForYourPurchaseMethods {
  static clickOnOkButton() {
    cy.wait(1000);
    ThankYouForYourPurchaseElements.buttons.ok.click();
  }

  static verifyGrennCheckMarkIsDisplayed() {
    ThankYouForYourPurchaseElements.icons.greenCheckMark.should("exist");
  }
}
