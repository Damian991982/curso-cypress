import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { HomeMethods } from "../pages/home/home.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";

const user = LoginData.validCredentials;

describe(CommonPageData.testSuites.catalogoYCompras, () => {
  it("Navegacion por categorias", () => {
    Logger.stepNumber(1);
    Logger.step("Iniciar sesion como usuario registrado");
    Logger.subStep("Navegate to Demoblaze application");
    CommonPageMethods.navigateToDemoBlaze();
    Logger.subStep("Click on 'Log in' link");
    CommonPageMethods.clickOnLoginOption();
    LoginMethods.login(user.username, user.password);

    Logger.stepNumber(2);
    Logger.step("Navegar a la pagina de inicio");
    CommonPageMethods.clickOnHomeOption();

    Logger.stepNumber(3);
    Logger.step("Seleccionar una categoria de productos en el menu de navegacion");
    HomeMethods.clickOnMonitorsOption();
    Logger.verification("Verificar que se muestra la lista de productos correspondiente a la categoria seleccionada");
    HomeMethods.verifyProductDisplayed("Apple monitor 24");
    HomeMethods.verifyProductDisplayed("ASUS Full HD");
  });
});
