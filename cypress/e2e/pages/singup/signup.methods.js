import { SignupElements } from "./signup.elements";

export class SignupMethods {
  static insertUsername(username) {
    SignupElements.textBoxes.username.invoke("val", username);
  }
  static insertarPassword(password) {
    SignupElements.textBoxes.password.invoke("val", password);
  }
  static clickOnSignupButton() {
    SignupElements.buttons.singup.click();
  }

  static signup(username, password) {
    this.insertUsername(username);
    this.insertarPassword(password);
    this.clickOnSignupButton();
  }
}
