const cucumber = require("@cucumber/cucumber");

class CustomWorld {
    constructor() {
        
    }
}

cucumber.setWorldConstructor(CustomWorld);

// What you make this class do is up to us
// Now browser related so need fresh page 
// 