
Feature: ParaBank Customer Registration

  Background:
    Given the user opens the ParaBank registration page

  Scenario: Register a new customer successfully
    Given the user generates new customer details
    When the user submits the registration form with matching passwords
    Then the customer registration should be successful

  Scenario: Display an error when passwords do not match
    Given the user generates new customer details
    When the user submits the registration form with mismatched passwords
    Then the password mismatch error should be displayed

  Scenario: Display an error for a duplicate username
    Given the user generates new customer details
    When the user submits the registration form with an existing username
    Then the duplicate username error should be displayed

  Scenario: Display validation errors when required fields are empty
    When the user submits the empty registration form
    Then the registration validation errors should be displayed
