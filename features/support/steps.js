const assert = require('assert');
const {Given, When, Then} = require('@cucumber/cucumber');

Given("the webpage has loaded", function() {
    assert(true);
});

Then("the heading text should read Random website", function() {
    assert(true);
});
