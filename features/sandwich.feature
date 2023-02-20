Feature: Testing my website

    Scenario: I should see the correct title
        Given the webpage has loaded
        Then the heading text should read Random website

    Scenario: The button should change color when clicked
        When the button is clicked
        Then the color should be darkred

    Scenario: The button is clicked twice 
        When the button is clicked
        And the button is clicked again
        Then the color should be cornflowerblue