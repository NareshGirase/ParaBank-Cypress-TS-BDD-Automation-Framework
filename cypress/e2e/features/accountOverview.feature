Feature: ParaBank Account Overview

  Background:
    Given the user opens the ParaBank login page
    When the user logs in with valid credentials
    Then the account overview page should be displayed

  Scenario: Verify Account Overview page title
    Then the Account Overview page title should be displayed

  Scenario: Verify account table headers
    Then the account table headers should be displayed

  Scenario: Verify account numbers are displayed
    Then all account numbers should be displayed

  Scenario: Open an account
    When the user opens an account
    Then the account details page should be displayed

  Scenario Outline: Verify account balance information
    Then all "<balance_type>" should be displayed

    Examples:
      | balance_type    |
      | account balances |
      | available balances |

  Scenario: Verify total balance is displayed
    Then the total balance should be displayed

  Scenario Outline: Verify minimum account balance
    Then each account should have a minimum balance of <minimum_balance> dollars

    Examples:
      | minimum_balance |
      | 100             |