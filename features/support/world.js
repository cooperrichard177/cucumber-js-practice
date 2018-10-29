const driver = require("selenium-webdriver");
require("chromedriver");
const browser = new driver.Builder().forBrowser("chrome").build();
const { setWorldConstructor, setDefaultTimeout } = require("cucumber");

class CustomWorld {
  constructor() {
    this.driver = driver;
    this.browser = browser;
    this.setDefaultTimeout = setDefaultTimeout(60 * 1000);
  }
}

setWorldConstructor(CustomWorld);
