Feature: Test Main Page

  Scenario: Opening a test main page
    Given I go to Test Main page
    Then I see "Frontend test-developer technical assignment" in the title

  Scenario: Adding New Asset with invalid format
    Given I go to add asset page
    When I add new asset with Invalid format "AB"
    Then It should not go to Modal

  Scenario: Adding New Asset with valid format
    Given I go to add asset page
    When I add new asset with valid format
    Then It should go to modal and show proper message "was added to the list"
    Then It should show proper title "Sucssess"

  Scenario: Try to add already added assest
    Given I go to add asset page
    When I add already added asset
    Then It should go to modal and show proper message "Asset name should be unique. Assert with this name already exists"
    Then It should show proper title "Asset alredy exist"

Scenario: Search successfully added asset
    Given I go to view asset page
    When I search for asset
    Then It should show exact asset

Scenario: Search by partial asset name
    Given I go to view asset page
    When I search for asset "QAUE"
    Then It should show all assets with "QAUE"


