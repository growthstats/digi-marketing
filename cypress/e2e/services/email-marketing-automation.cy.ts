describe('Services Page Test Suite', () => {
  beforeEach('Navigate to Main URL and Open Services Dropdown', () => {
    cy.navigateToMainUrlAndOpenServicesDropdown();
  });

  // Test Case: Verify "Email Marketing & Automation" Page
  it('Should navigate to and verify elements on the Email Marketing & Automation page', () => {
    cy.selectService('Email Marketing & Automation', '/email-marketing-automation');

    // Verify the visibility of the hero animation
    cy.get('[class*="email-marketing-hero-section_d-section"] svg').should('be.visible');

    // Verify contact section, total contact links verification
    cy.verifyContactSectionAndElementCounts();
  });
});
