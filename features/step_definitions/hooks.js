 const { After, Before } = require("cucumber");

 After(async function() {
    await this.browser.close();
 });
// AfterAll(async function() {
//   await this.browser.close();
// });
