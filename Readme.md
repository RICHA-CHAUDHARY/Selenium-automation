📘 SauceDemo Automation Framework

Selenium WebDriver | JavaScript | Page Object Model (POM)

1. Overview :

>This project automates the SauceDemo web application using Selenium WebDriver with JavaScript (Node.js).
>The framework follows the Page Object Model (POM) design pattern to ensure better code organization, reusability, and maintainability.

2. Prerequisites :

> Before executing the scripts, ensure the following are installed on the system:

>>Node.js (version 16 or higher recommended)
>>Google Chrome browser
>>ChromeDriver compatible with the installed Chrome version

3. Steps to Execute the Scripts :

>>Open the project directory in a terminal.
> cd selenium-automation

>>Install the required dependencies.
> npm install

>>Execute the test script.
> node tests/sauceDemoTest.js

4. Project Structure:

> pages/    Contains Page Object files for each application page  
> tests/    Contains the main test execution script

5. Assumptions and Observations:

> The SauceDemo application (https://www.saucedemo.com/) is accessible and stable during execution.
> Valid test credentials used:
>>Username: standard_user
>>Password: secret_sauce
> Tests are executed on the Chrome browser.
> ES Modules (import / export default) are used consistently across the project.
> The Page Object Model is implemented to separate test logic from UI element locators.
> Explicit waits and controlled delays are applied to ensure reliable execution.

6. Functional Coverage :

> Validation of invalid and valid login scenarios
> Product sorting and adding items to the cart
> Removing items from the cart
> Checkout process and order confirmation
> Logout functionality

7. Conclusion :

This automation framework demonstrates a structured and scalable approach to UI test automation using Selenium with JavaScript. The use of POM improves readability and simplifies maintenance when application changes occur.