Feature: Checkout

  Background: I am logged in and have added all products
    Given I am logged in
    And I have added all products to the cart

  

  Scenario: Negative – missing first name
    When I go to the cart
    And I proceed to checkout
    And I fill checkout information with missing first name
    Then I should see an error

  Scenario: Negative – missing last name
    When I go to the cart
    And I proceed to checkout
    And I fill checkout information with missing last name
    Then I should see an error

  Scenario: Negative – missing postal code
    When I go to the cart
    And I proceed to checkout
    And I fill checkout information with missing postal code
    Then I should see an error

    Scenario: Complete checkout successfully
    When I go to the cart
    And I proceed to checkout
    And I fill my information
    Then the item total should equal the sum of individual prices
    And the tax should be correctly calculated
    When I finish the order
    Then I should see a success message
    And the cart badge should be empty
    And I can logout successfully