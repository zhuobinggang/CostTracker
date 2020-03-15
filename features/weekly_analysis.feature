Feature: I want to see the weekly analysis 
  Scenario Outline: 
    Given Today is '<date>', and there is already some '<records>' these days.
    When I want to read weekly analysis
    Then The weekly analysis is like '<analysis>'
    And Clear the db
  Examples:
    | date | records | analysis | 
    | 2020-1-1 | Food,300,2019-12-31;Food,100,2019-12-31;Food,900,2019-12-30;Clothe,500,2019-12-29 | 2019-12-29:500,2019-12-30:900,2019-12-31:400,2020-1-1:0,2020-1-2:0,2020-1-3:0,2020-1-4:0 |

  Scenario Outline: 
    Given Today is '<date>', and there is already some '<records>' these days.
    When I want to read monthly analysis
    Then Just log it out
    And Clear the db
  Examples:
    | date | records |  
    | 2019-12-3 | Food,300,2019-12-31;Food,100,2019-12-31;Food,900,2019-12-30;Clothe,500,2019-12-29 | 