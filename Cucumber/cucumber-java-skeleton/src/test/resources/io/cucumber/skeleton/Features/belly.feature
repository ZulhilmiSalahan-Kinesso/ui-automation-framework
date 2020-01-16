Feature: Belly

  Scenario: a few cukes
    Given I have 42 cukes in my belly
    When I wait 1 hour
    Then my belly should growl to 43

  Scenario: a few cukes 2
    Given I have 43 cukes in my belly
    When I wait 1 hour
    Then my belly should growl to 44