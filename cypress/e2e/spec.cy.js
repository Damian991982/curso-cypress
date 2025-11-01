import { HomeMethods } from "./pages/home/home.methods";
import { LoginMethods } from "./pages/login/login.methods";

describe("template spec", () => {
  it("passes", () => {
    //const usuario = "random01";
    //const contraseña = "random01";
    cy.visit("https://www.demoblaze.com/index.html");
    HomeMethods.clickOnProductLink("Iphone 6 32gb");
    cy.wait(20000);
  });
});
