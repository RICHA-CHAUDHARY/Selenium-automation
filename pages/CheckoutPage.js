import { By } from "selenium-webdriver";

export default class CheckoutPage {
    constructor(driver) {
        this.driver = driver;
        this.firstName = By.id("first-name");
        this.lastName = By.id("last-name");
        this.postalCode = By.id("postal-code");
        this.continueBtn = By.id("continue");
        this.finishBtn = By.id("finish");
        this.totalLabel = By.className("summary_total_label");
        this.successMsg = By.className("complete-header");
    }

    async fillCheckoutForm(firstName, lastName, postalCode) {
        await this.driver.findElement(this.firstName).sendKeys(firstName);
        await this.driver.findElement(this.lastName).sendKeys(lastName);
        await this.driver.findElement(this.postalCode).sendKeys(postalCode);
    }

    async continueCheckout() {
        await this.driver.findElement(this.continueBtn).click();
    }

    async finishCheckout() {
        await this.driver.findElement(this.finishBtn).click();
    }

    async getTotalAmount() {
        return await this.driver.findElement(this.totalLabel).getText();
    }

    async getSuccessMessage() {
        return await this.driver.findElement(this.successMsg).getText();
    }
}
