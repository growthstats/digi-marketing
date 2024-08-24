describe('Services Page Test Suite', () => {
  beforeEach('Navigate to Main URL and Open Services Dropdown', () => {
    cy.navigateToMainUrlAndOpenServicesDropdown();
  });

  // Test Case: Verify "Social Media Services" Page
  it('Social Media Services page', () => {
    cy.get('ul.anim-fade-to-b')
      .find('li')
      .find('a[href="/social-media-services"]')
      .contains('a', 'Social Media Services')
      .click({ force: true }); // Navigate to the Social Media Services page

    // Verify the visibility of the hero animation
    cy.get('[class*="social-media-services-hero-section_d-section__image-wrapper"]').find('svg').should('be.visible');
  });

  afterEach('contact section, total contact links verification', () => {
    cy.verifyContactSectionAndElementCounts();
  });
});
