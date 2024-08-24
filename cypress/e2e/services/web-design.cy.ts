describe('Services Page Test Suite', () => {
  beforeEach('Navigate to Main URL and Open Services Dropdown', () => {
    cy.navigateToMainUrlAndOpenServicesDropdown();
  });

  // Test Case: Verify "Web Design" Page
  it('Should navigate to and verify elements on the Web Design page', () => {
    // Navigate to the Web Design page
    cy.get('ul.anim-fade-to-b').find('li').find('a[href="/web-design"]').contains('a', 'Web Design').click({ force: true });

    // Verify the visibility of the hero animation
    cy.get('[class*="web-design-hero-section_d-section__image-wrapper"]').find('svg').should('be.visible');

    // Log and verify the number of cards
    cy.logCardLinksCount();

    // Verify contact section, total contact links verification
    cy.verifyContactSectionAndElementCounts();
  });
});
