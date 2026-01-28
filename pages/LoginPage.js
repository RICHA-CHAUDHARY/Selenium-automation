import { By, until } from "selenium-webdriver";

export default class LoginPage {
    constructor(driver) {
        this.driver = driver;
        this.username = By.id("user-name");
        this.password = By.id("password");
        this.loginBtn = By.id("login-button");
        this.errorMsg = By.tagName("h3");
    }

    async open(url) {
        await this.driver.get(url);
        await this.driver.manage().window().maximize();
    }

    async login(username, password) {
        await this.driver.findElement(this.username).sendKeys(username);
        await this.driver.findElement(this.password).sendKeys(password);
        await this.driver.findElement(this.loginBtn).click();
    }

    async getErrorMessage() {
        await this.driver.wait(until.elementLocated(this.errorMsg), 5000);
        return await this.driver.findElement(this.errorMsg).getText();
    }
}
