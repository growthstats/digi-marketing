describe('Services Page Test Suite', () => {
  beforeEach('url passes', () => {
    cy.navigateToMainUrlAndOpenServicesDropdown();
  });

  // Test Case: Verify "SEM / Paid Advertising" Page
  it('SEM Paid Advertising page', () => {
    cy.get('ul.anim-fade-to-b')
      .find('li')
      .find('a[href="/sem-paid-advertising"]')
      .contains('a', 'SEM / Paid Advertising')
      .click({ force: true }); // Navigate to the SEM / Paid Advertising page

    // Verify the visibility of the hero animation
    cy.get('[class*="sem-hero-section_d-section__image-wrapper"]').find('svg').should('be.visible');
  });

  afterEach('contact section, total contact links verification', () => {
    cy.verifyContactSectionAndElementCounts();
  });
});
