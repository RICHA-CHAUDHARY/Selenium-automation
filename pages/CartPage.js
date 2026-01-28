import { By } from "selenium-webdriver";

export default class CartPage {
    constructor(driver) {
        this.driver = driver;
        this.cartLink = By.className("shopping_cart_link");
        this.removeBikeLight = By.id("remove-sauce-labs-bike-light");
        this.checkoutBtn = By.id("checkout");
        this.cartBadge = By.className("shopping_cart_badge");
    }

    async openCart() {
        await this.driver.findElement(this.cartLink).click();
    }

    async removeBikeLightItem() {
        await this.driver.findElement(this.removeBikeLight).click();
    }

    async goToCheckout() {
        await this.driver.findElement(this.checkoutBtn).click();
    }

    async getCartCount() {
        return await this.driver.findElement(this.cartBadge).getText();
    }
}