describe('Services Page Test Suite', () => {
  beforeEach('Navigate to Main URL and Open Services Dropdown', () => {
    cy.navigateToMainUrlAndOpenServicesDropdown();
  });

  // Test Case: Verify "SEM / Paid Advertising" Page
  it('Should navigate to and verify elements on the SEM / Paid Advertising page', () => {
    cy.selectService('SEM / Paid Advertising', '/sem-paid-advertising');

    // Verify the visibility of the hero animation
    cy.get('[class*="sem-hero-section_d-section__image-wrapper"] svg').should('be.visible');

    // Log and verify the number of cards
    cy.logCardLinksCount();

    // Verify contact section, total contact links verification
    cy.verifyContactSectionAndElementCounts();
  });
});
