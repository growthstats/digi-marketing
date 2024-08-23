describe('Services Page Test Suite', () => {
  beforeEach('Navigate to Main URL and Open Services Dropdown', () => {
    cy.visit('https://growthstats.io/'); // Visit the main URL
    cy.get('details').click(); // Open the services dropdown menu
  });

  // Test Case: Verify "Search Engine Optimization" Page
  it('Search engine optimization page', () => {
    cy.get('ul.anim-fade-to-b')
      .find('li')
      .find('a[href="/search-engine-optimization"]')
      .contains('a', 'Search Engine Optimization')
      .click({ force: true }); // Navigate to the Search Engine Optimization page

    cy.get('[class*="seo-section_d-section__image-wrapper"]').find('svg').should('be.visible'); // Verify the visibility of the hero animation
  });

  afterEach('contact section, total contact links verification', () => {
    cy.verifyContactSectionElements(); // Verify the presence of contact section elements
    cy.logContactLinksCount(); // Log and verify the total number of contact links

    // Conditional Check: Skip card link count verification for Email Marketing & Automation page
    cy.url().then((currentPageUrl) => {
      if (currentPageUrl !== 'https://growthstats.io/email-marketing-automation') {
        cy.logCardLinksCount(); // Log and verify the number of cards
      }
    });
  });
});
