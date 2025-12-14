import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";

describe(CommonPageData.testSuites.autenticacion, () => {
  it("Inicio de sesion valido", () => {
    Logger.stepNumber(1);
    Logger.step("Navegar a la pagina de inicio");
    CommonPageMethods.navigateToDemoBlaze();

    Logger.stepNumber(2);
    Logger.step("Hacer click en 'Log In' en la barra de navegacion");
    CommonPageMethods.clickOnLoginOption();

    Logger.stepNumber(3);
    Logger.step("Ingresar un nombre de usuario y contraseña validos");
    LoginMethods.insertUsername(LoginData.validCredentials.username);
    LoginMethods.insertPassword(LoginData.validCredentials.password);

    Logger.stepNumber(4);
    Logger.step("Hacer click 'Log In' para iniciar sesion");
    LoginMethods.clickOnLoginButton();
    Logger.verification("Verificar que se redirige al usuario a la pagina de inicio");
    CommonPageMethods.verifySignedUser(LoginData.validCredentials.username);
  });
});
