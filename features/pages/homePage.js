const { Browser, By, Key, until } = require("selenium-webdriver");
const url = "https://www.hellobenefex.com";

class HomePage {
  constructor(browser) {
    this.driver = driver;
    this.browser = browser;
    this.locators = {
      navigationBar: By.css("enter css"),
      navigationBenefitsLink: By.css("enter css for benefits link")
    };
  }
  openHomePage() {
    this.browser.get(url);
  }

  openNavigationBar() {
    this.browser.findElement(this.locators.navigationBar).click();
  }

  clickBenefitsNavigationLink() {
    this.browser.findElement(this.locators.navigationBenefitsLink).click();
  }
}

module.exports = HomePage;
