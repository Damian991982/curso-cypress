import { ProductDetailsElements } from "./product-details.elements";

export class ProductDetailsMethods {
  static clickOnToCartButton() {
    ProductDetailsElements.buttons.addToCart.click();
  }
}
