import { CartMethods } from "../pages/cart/cart.methods";
import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { HomeMethods } from "../pages/home/home.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { PlaceOrderData } from "../pages/place-order/place-order.data";
import { PlaceOrderMethods } from "../pages/place-order/place-order.methods";
import { ProductDetailsMethods } from "../pages/product-details/product-details.methods";
import { ThankYouForYourPurchaseMethods } from "../pages/thank-you-for-your-purchase/thank-you-for-your-purchase.methods";
import { Logger } from "../util/logger";

const user = LoginData.validCredentials;
const product = "ASUS Full HD";

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

    Logger.postCondition("Log out");
    CommonPageMethods.logout();
  });

  it("Agregar producto al carrito", () => {
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

    Logger.stepNumber(4);
    Logger.step("Hacer click en un producto especifico");
    HomeMethods.clickOnProductLink(product);

    Logger.stepNumber(5);
    Logger.verification("Verificar que se muestre la pagina de detalles del producto");
    ProductDetailsMethods.verifyProductDetailsPageDisplayed();

    Logger.stepNumber(6);
    Logger.step("Hacer click en el boton 'Add to cart'");
    ProductDetailsMethods.clickOnToCartButton();

    Logger.stepNumber(7);
    Logger.verification("Verificar que se muestre un mensaje de confirmacion y el producto se agrega al carrito");
    ProductDetailsMethods.verifyProductAddedMessage();
    CommonPageMethods.clickOnCartOption();
    CartMethods.verifyProductAdded(product);

    Logger.postCondition("Empty cart and logout");
    CartMethods.emptyCart(user.username, user.password);
    CommonPageMethods.logout();
  });

  it("Realizar una compra", () => {
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

    Logger.stepNumber(4);
    Logger.step("Hacer click en un producto especifico");
    HomeMethods.clickOnProductLink(product);

    Logger.stepNumber(5);
    Logger.verification("Verificar que se muestre la pagina de detalles del producto");
    ProductDetailsMethods.verifyProductDetailsPageDisplayed();

    Logger.stepNumber(6);
    Logger.step("Hacer click en el boton 'Add to cart'");
    ProductDetailsMethods.clickOnToCartButton();

    Logger.stepNumber(7);
    Logger.verification("Verificar que se muestre un mensaje de confirmacion y el producto se agrega al carrito");
    ProductDetailsMethods.verifyProductAddedMessage();
    CommonPageMethods.clickOnCartOption();
    CartMethods.verifyProductAdded(product);

    Logger.stepNumber(8);
    Logger.step("Hacer click en la opcion 'Cart' en la barra de navegacion");
    CommonPageMethods.clickOnCartOption();

    Logger.stepNumber(9);
    Logger.step("Verificar que se muestre la pagina de carrito de compras");
    CartMethods.verifyCartPageIsShown();

    Logger.stepNumber(10);
    Logger.step("Hacer click en el boton 'Place Order'");
    CartMethods.clickOnPlaceOrderButton();

    Logger.stepNumber(11);
    Logger.step("Completar los campos obligatorios en la pagina de informacion de envio");
    PlaceOrderMethods.insertOrderInformation(PlaceOrderData.testData);

    Logger.stepNumber(12);
    Logger.step("Hacer click en el boton 'Purchase'");
    PlaceOrderMethods.clickOnPurchaseButton();

    Logger.stepNumber(13);
    Logger.step("Verificar que se muestre un mensaje de confirmacion y se redirige al usuario a la pagina de inicio");
    ThankYouForYourPurchaseMethods.verifyGrennCheckMarkIsDisplayed();
    ThankYouForYourPurchaseMethods.clickOnOkButton();
    HomeMethods.verifyHomePageIsShown();

    Logger.postCondition("Log out");
    CommonPageMethods.logout();
  });
});
