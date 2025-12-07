import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { SignupMethods } from "../pages/singup/signup.methods";
import { Logger } from "../util/logger";
const user = CommonPageMethods.generateRandomString();
const password = CommonPageMethods.generateRandomString(7);

describe(CommonPageData.testSuites.registroYAutenticacion, () => {
  it("Registro de usuario valido", () => {
    Logger.stepNumber(1);
    Logger.step("Navegar a la pagina de inicio");
    CommonPageMethods.navigateToDemoBlaze();

    Logger.stepNumber(2);
    Logger.step("Hacer click en 'Sing up' en la barra de navegacion");
    CommonPageMethods.clickOnSignupOption();

    Logger.stepNumber(3);
    Logger.step("Completar todos los campos obligatorios con informacion valida");
    SignupMethods.insertUsername(user);
    SignupMethods.insertarPassword(password);
    //SignupMethods.insertUsername("dhf3");
    //SignupMethods.insertarPassword("dhf3");

    Logger.stepNumber(4);
    Logger.step("Hacer click en 'Sign up' para registrar el usuario");
    SignupMethods.clickOnSignupButton();

    Logger.verification("Verificar que se muestre el mensaje 'Sign up successful.' ");
    SignupMethods.verifySignupSuccesfullMessageIsDisplayed();
  });

  //Paso 1: Navegar a la pagina de inicio
  //Paso 2: Hacer click en "Sing up" en la barra de navegacion
  //Paso 3: Completar todos los campos obligatorios con informacion valida
  //Paso 4: Hacer click en "Sign up" para registrar el usuario
  //Paso 5: Verificar que el usuario se rediriga a la pagina de inicio de sesion.
});
