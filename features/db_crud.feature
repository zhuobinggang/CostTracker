Feature: Create and read cost
  Scenario Outline: Create and read cost
    Given OK
    When I create a cost of type: '<type>', cost: '<cost>', detail: '<detail>'
    And I read all cost today
    Then The cost is contained in the list
  Examples:
    | type | cost | detail |
    | Food | 300 | cup noodle |

  Scenario Outline: To read the cost of some day before 
    Given OK
    When I create a cost of type: '<type>', cost: '<cost>', detail: '<detail>', time: '<time>'
    And I read all cost in date '<time>'
    Then The cost is contained in the list
  Examples:
    | type | cost | detail | time | 
    | Food | 300 | cup noodle | 1997-10-01 |

  Scenario Outline: I want to see yesterday analysis