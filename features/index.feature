Feature: Testing website

    Scenario: I should see the correct title
        Given the webpage has loaded
        Then the heading text should read "Cucumber Sandwich"

    Scenario: The button should change color when clicked
        When button clicked
        Then the color should be darkred

    Scenario: The button is clicked twice 
        When button clicked
        And button clicked
        Then the color should be cornflowerblue