
Feature: ParaBank Login

  Scenario: Login with valid credentials
    Given the user opens the ParaBank login page
    When the user logs in with valid credentials
    Then the account overview page should be displayed
    And the user logs out

  Scenario: Login with invalid username
    Given the user opens the ParaBank login page
    When the user logs in with an invalid username
    Then a login error should be displayed

  Scenario: Login with invalid password
    Given the user opens the ParaBank login page
    When the user logs in with an invalid password
    Then a login error should be displayed

  Scenario: Login without credentials
    Given the user opens the ParaBank login page
    When the user submits the login form without credentials
    Then a login error should be displayed
