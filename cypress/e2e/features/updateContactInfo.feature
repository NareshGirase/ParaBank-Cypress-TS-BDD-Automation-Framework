Feature: Update Contact Information

  Background:
    Given the user opens the ParaBank login page
    When the user logs in with valid credentials
    Then the account overview page should be displayed


  Scenario: Update customer contact information successfully
    When I navigate to the Update Contact Info page
    And I update the contact information with generated data
    And I submit the updated contact information
    Then I should see the contact information update success message