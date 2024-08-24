describe('Services Page Test Suite', () => {
  beforeEach('Navigate to Main URL and Open Services Dropdown', () => {
    cy.navigateToMainUrlAndOpenServicesDropdown();
  });

  // Test Case: Verify "Search Engine Optimization" Page
  it('Search engine optimization page', () => {
    cy.get('ul.anim-fade-to-b')
      .find('li')
      .find('a[href="/search-engine-optimization"]')
      .contains('a', 'Search Engine Optimization')
      .click({ force: true }); // Navigate to the Search Engine Optimization page

    // Verify the visibility of the hero animation
    cy.get('[class*="seo-section_d-section__image-wrapper"]').find('svg').should('be.visible');
  });

  afterEach('contact section, total contact links verification', () => {
    cy.verifyContactSectionAndElementCounts();
  });
});
