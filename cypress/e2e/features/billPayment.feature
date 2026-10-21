
Feature: ParaBank Bill Payment Service

  Background:
    Given the user opens the ParaBank login page
    When the user logs in with valid credentials
    Then the account overview page should be displayed

  Scenario: Successfully submit a bill payment
    When the user opens the Bill Payment Service page
    Then the Bill Payment Service page title should be displayed
    Given the user generates new payee details
    When the user enters the payee details
    And the user selects the first available account
    And the user submits the bill payment
    Then the bill payment should be successful
