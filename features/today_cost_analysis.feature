Feature: To show analysis of costs today
  I will be shown analysis when I enter the homepage

  Scenario: I will be shown analysis 
    Given I have some cost items today
    When I enter the homepage
    Then I will be shown analysis

