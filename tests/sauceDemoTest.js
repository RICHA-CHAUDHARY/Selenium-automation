import { Builder, By, until } from "selenium-webdriver";
import LoginPage from "../pages/LoginPage.js";
import InventoryPage from "../pages/InventoryPage.js";
import ProductPage from "../pages/ProductPage.js";
import CartPage from "../pages/CartPage.js";
import CheckoutPage from "../pages/CheckoutPage.js";
import MenuPage from "../pages/MenuPage.js";

async function sauceDemoTest() {
    let driver = await new Builder().forBrowser("chrome").build();

    const loginPage = new LoginPage(driver);
    const inventoryPage = new InventoryPage(driver);
    const productPage = new ProductPage(driver);
    const cartPage = new CartPage(driver);
    const checkoutPage = new CheckoutPage(driver);
    const menuPage = new MenuPage(driver);

    try {
        // SETUP
        await loginPage.open("https://www.saucedemo.com/");
        await driver.sleep(2000);

        // INVALID LOGIN
        await loginPage.login("invalid_user", "wrong_password");
        let errorMsg = await loginPage.getErrorMessage();
        console.log("Invalid Login Error:", errorMsg);
        await driver.navigate().refresh();
        await driver.sleep(3000);

        // VALID LOGIN
        await loginPage.login("standard_user", "secret_sauce");
        await driver.sleep(3000);
        console.log("Login Successful 🎯");

        // ADD ITEMS
        await inventoryPage.sortProducts("Price (low to high)");
        await driver.sleep(2000);

        await inventoryPage.addBackpack();
        await driver.sleep(1000);
        await inventoryPage.addBikeLight();
        await driver.sleep(1000);

        let cartCount = await inventoryPage.getCartCount();
        console.log("Cart Count after 2 items 🧺:", cartCount);

        // PRODUCT PAGE ADD
        await inventoryPage.goToProductPage();
        await driver.sleep(3000);
        await productPage.addToCart();
        await driver.sleep(3000);

        cartCount = await inventoryPage.getCartCount();
        console.log("Cart Count after Onesie ➕:", cartCount);

        // REMOVE ITEM
        await cartPage.openCart();
        await driver.sleep(3000);
        await cartPage.removeBikeLightItem();
        await driver.sleep(3000);

        cartCount = await cartPage.getCartCount();
        console.log("Cart Count after removal ➖:", cartCount);

        // CHECKOUT
        await cartPage.goToCheckout();
        await driver.sleep(3000);
        await checkoutPage.fillCheckoutForm("Richa", "Chaudhary", "110084");
        await driver.sleep(3000);
        await checkoutPage.continueCheckout();
        await driver.sleep(3000);

        let totalAmount = await checkoutPage.getTotalAmount();
        console.log("Total Amount 💰:", totalAmount);

        await checkoutPage.finishCheckout();
        await driver.sleep(3000);

        let successMsg = await checkoutPage.getSuccessMessage();
        console.log("Order Status 🎉:", successMsg);

        // LOGOUT
        await menuPage.logout();
        await driver.sleep(3000);
        console.log("Logout Successful 👋");

    } finally {
        await driver.sleep(3000);
        await driver.quit();
    }
}

sauceDemoTest();