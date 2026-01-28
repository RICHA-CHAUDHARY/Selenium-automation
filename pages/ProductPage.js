import { By } from "selenium-webdriver";

export default class ProductPage {
    constructor(driver) {
        this.driver = driver;
        this.addToCartBtn = By.id("add-to-cart");
    }

    async addToCart() {
        await this.driver.findElement(this.addToCartBtn).click();
    }
}
