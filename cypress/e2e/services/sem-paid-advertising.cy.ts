describe('Services Page Test Suite', () => {
  beforeEach('url passes', () => {
    cy.visit('https://growthstats.io/'); // Visit the main URL
    cy.get('details').click(); // Open the services dropdown menu
  });

  // Test Case: Verify "SEM / Paid Advertising" Page
  it('SEM Paid Advertising page', () => {
    cy.get('ul.anim-fade-to-b')
      .find('li')
      .find('a[href="/sem-paid-advertising"]')
      .contains('a', 'SEM / Paid Advertising')
      .click({ force: true }); // Navigate to the SEM / Paid Advertising page

    cy.get('[class*="sem-hero-section_d-section__image-wrapper"]').find('svg').should('be.visible'); // Verify the visibility of the hero animation
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
