Feature: SortProducts

Background: I am logged in and on the inventory page
    Given I am logged in
    And I am on the inventory page

  Scenario: Sort A to Z
    When I sort products by "az"
    Then the products should be displayed in alphabetical order ascending

  Scenario: Sort Z to A
    When I sort products by "za"
    Then the products should be displayed in alphabetical order descending

  Scenario: Sort price low to high
    When I sort products by "lohi"
    Then the products should be displayed in price order ascending

  Scenario: Sort price high to low
    When I sort products by "hilo"
    Then the products should be displayed in price order descending