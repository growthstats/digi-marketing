describe('Services Page Test Suite', () => {
  beforeEach('Navigate to Main URL and Open Services Dropdown', () => {
    cy.navigateToMainUrlAndOpenServicesDropdown();
  });

  // Test Case: Verify "Social Media Services" Page
  it('Should navigate to and verify elements on the Social Media Services page', () => {
    cy.selectService('Social Media Services', '/social-media-services');

    // Verify the visibility of the hero animation
    cy.get('[class*="social-media-services-hero-section_d-section__image-wrapper"] svg').should('be.visible');

    // Log and verify the number of cards
    cy.logCardLinksCount();

    // Verify contact section, total contact links verification
    cy.verifyContactSectionAndElementCounts();
  });
});
