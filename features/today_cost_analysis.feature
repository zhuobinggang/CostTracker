Feature: Cost Analysis Today
  Scenario Outline: Add Record Then Show The Analysis
    Given I have no record today
    When I add records with cost of "<costList>", type of "<typeList>" today
    Then I will be shown analysis
    And The percentage list of the records will be '<percentMap>'
  Examples:
    | typeList | costList | percentMap |
    | Life, Food | 200, 300 | {"Life": 40, "Food": 60} |
    | Life, Food | 0, 0 | {"Life": 100, "Food": 100} |

  Scenario Outline: I want to see the total Cost
    Given I have no record today
    When I add records with cost of "<costList>", type of "<typeList>" today
    Then I will be shown analysis
    And The total cost will be '<totalCost>'
  Examples:
    | typeList | costList | totalCost |
    | Life, Food | 200, 300 | 500 |
