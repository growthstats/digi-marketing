describe('Services Page Test Suite', () => {
  beforeEach('Navigate to Main URL and Open Services Dropdown', () => {
    cy.navigateToMainUrlAndOpenServicesDropdown();
  });

  // Test Case: Verify "Email Marketing & Automation" Page
  it('Should navigate to and verify elements on the Email Marketing & Automation page', () => {
    cy.get('ul.anim-fade-to-b')
      .find('li')
      .find('a[href="/email-marketing-automation"]')
      .contains('a', 'Email Marketing & Automation')
      .click({ force: true }); // Navigate to the Email Marketing & Automation page

    // Verify the visibility of the hero animation
    cy.get('[class*="email-marketing-hero-section_d-section"]').find('svg').should('be.visible');
  });

  afterEach('contact section, total contact links verification', () => {
    cy.verifyContactSectionAndElementCounts();
  });
});
