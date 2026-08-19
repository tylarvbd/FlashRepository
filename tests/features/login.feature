Feature: Login

    Background: Navigate to swag labs page "https://www.saucedemo.com"

  Scenario: Valid user logs in
    Given I am on the login page
    When I log in as a standard user
    Then I should be redirected to the inventory page

  Scenario: Invalid user sees error
    Given I am on the login page
    When I enter invalid username and password
    Then I should see an error message about invalid credentials
