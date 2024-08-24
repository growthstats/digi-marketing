describe('Services Page Test Suite', () => {
  beforeEach('Navigate to Main URL and Open Services Dropdown', () => {
    cy.navigateToMainUrlAndOpenServicesDropdown();
  });

  // Test Case: Verify "Search Engine Optimization" Page
  it('Should navigate to and verify elements on the Search Engine Optimization page', () => {
    cy.selectService('Search Engine Optimization', '/search-engine-optimization');

    // Verify the visibility of the hero animation
    cy.get('[class*="seo-section_d-section__image-wrapper"] svg').should('be.visible');

    // Log and verify the number of cards
    cy.logCardLinksCount();

    // Verify contact section, total contact links verification
    cy.verifyContactSectionAndElementCounts();
  });
});
