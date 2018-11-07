Feature: Google Search Functionality

  Scenario: Google home page opens correctly
    When I open google
    Then I should be on the google home page

  Scenario Outline: I can search for products
    Given I am on the google home page
    When I enter <things to search for>
       And I click search
    Then a list of search results are returned

    Examples:
    |things to search for|
    |"Rabbits"|
    # |"Circle CI"|
    # |"Benefex"|

