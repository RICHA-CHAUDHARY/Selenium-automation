import { By } from "selenium-webdriver";

export default class MenuPage {
    constructor(driver) {
        this.driver = driver;
        this.menuBtn = By.id("react-burger-menu-btn");
        this.logoutLink = By.id("logout_sidebar_link");
    }

    async logout() {
        await this.driver.findElement(this.menuBtn).click();
        await this.driver.sleep(1000);
        await this.driver.findElement(this.logoutLink).click();
    }
}
