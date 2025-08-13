Feature: Login functionality

  Scenario: Login without entering username
    Given User is on the login page
    When User clicks the Login button
    Then User should see "Epic sadface: Username is required" error message
