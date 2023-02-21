const assert = require('assert');
const {Given, When, Then, Before, After} = require('@cucumber/cucumber');
const Browser = require("../../Browser");
const browser = new Browser();
const { By } = require('selenium-webdriver');

Before(async function() {
    browser.browserBuild();
    await browser.browserNavigate('http://127.0.0.1:5500/');
});

After(async function() {
    await browser.browserExit();
});

Given("the webpage has loaded", function() {
    // Nothing to do as page already loaded
});


When("button clicked", async function() {
    await browser.elementClick('navbarButton')
});

    
// When("the button is clicked again", function() {
//     assert(true);
// });

Then("the heading text should read {string}", async function(title) {
    const actual = await browser.headless.getTitle();
    // expect(actual).toBe('Cucumber Sandwich');
    assert(actual == title);
});

Then("the color should be darkred", async function() {
    const actual = await browser.elementFillColorCss("navbarButton");
    assert(actual == 'rgba(139, 0, 0, 1)');
});


Then("the color should be cornflowerblue", async function() {
    const actual = await browser.elementFillColorCss("navbarButton");
    assert(actual == 'rgba(100, 149, 237, 1)');
});
