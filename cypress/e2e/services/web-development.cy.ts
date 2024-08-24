describe('Services Page Test Suite', () => {
  beforeEach('Navigate to Main URL and Open Services Dropdown', () => {
    cy.navigateToMainUrlAndOpenServicesDropdown();
  });

  // Test Case: Verify "Web Development" Page
  it('Should navigate to and verify elements on the Web Development page', () => {
    cy.selectService('Web Development', '/web-development');

    // Verify the visibility of the hero animation
    cy.get('[class*="web-dev-hero-section_d-section__image-wrapper"] svg').should('be.visible');

    // Log and verify the number of cards
    cy.logCardLinksCount();

    // Verify contact section, total contact links verification
    cy.verifyContactSectionAndElementCounts();
  });
});
