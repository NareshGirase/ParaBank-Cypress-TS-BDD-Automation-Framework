
Feature: ParaBank Open New Account

  Background:
    Given the user opens the ParaBank login page
    When the user logs in with valid credentials
    Then the account overview page should be displayed
    When the user opens the Open New Account page
    Then the Open New Account page should be displayed

  Scenario Outline: Open a new account successfully
    When the user selects the "<accountType>" account type
    And the user selects existing account number 24333
    And the user submits the new account request
    Then the new account should be opened successfully

    Examples:
      | accountType |
      | CHECKING    |
      | SAVINGS     |
