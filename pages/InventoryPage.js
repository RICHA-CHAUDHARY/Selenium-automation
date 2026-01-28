import { By, until } from "selenium-webdriver";

export default class InventoryPage {
    constructor(driver) {
        this.driver = driver;
        this.sortDropdown = By.className("product_sort_container");
        this.cartBadge = By.className("shopping_cart_badge");
        this.backpackAdd = By.id("add-to-cart-sauce-labs-backpack");
        this.bikeLightAdd = By.id("add-to-cart-sauce-labs-bike-light");
        this.onesieLink = By.linkText("Sauce Labs Onesie");
    }

    async sortProducts(option) {
        const dropdown = await this.driver.wait(
            until.elementLocated(this.sortDropdown),
            10000
        );
        await dropdown.sendKeys(option);
    }

    async addBackpack() {
        await this.driver.findElement(this.backpackAdd).click();
    }

    async addBikeLight() {
        await this.driver.findElement(this.bikeLightAdd).click();
    }

    async goToProductPage() {
        await this.driver.findElement(this.onesieLink).click();
    }

    async getCartCount() {
        return await this.driver.findElement(this.cartBadge).getText();
    }
}

