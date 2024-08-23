describe('Home Page Test Suite', () => {
  beforeEach('Navigate to Home Page', () => {
    cy.visit('https://growthstats.io/'); // Visit the Home page URL
  });

  // Test Case: Verify Home Page Titles
  it('Should verify the main titles on the Home page', () => {
    cy.get('h1').eq(0).contains('Online Marketing'); // Verify the first H1 title
    cy.get('div[class="banner-text_d-container__heading__rRJie text-4xl md:text-6xl"]').contains('growth stats'); // Verify the banner text
  });

  // Test Case: Verify Client Logos and Service Cards
  it('Should verify the presence of client logos and the correct number of service cards', () => {
    cy.get('section.section.space-y-8').find('img').should('exist'); // Verify client logos exist

    cy.get(
      'div[class="rt-Grid rt-r-gtc-1 sm:rt-r-gtc-2 lg:rt-r-gtc-3 rt-r-gap-6 rt-r-w services-section_d-section__cards-container__BfYQV"]',
    )
      .find('a')
      .should('have.length', 6); // Verify there are 6 service cards
  });

  // Test Case: Verify Benefits Section
  it('Should verify the content of the benefits section', () => {
    cy.get('h3').eq(0).contains('We Can Improve Your Business Performance And Gain More Customers'); // Verify the benefits section heading
  });

  // Test Case: Verify Contact Section and Total Contact Links
  it('Should verify the contact section and the total number of contact links', () => {
    cy.verifyContactSectionElements(); // Verify the presence of contact section elements
    cy.logContactLinksCount(); // Log and verify the total number of contact links
  });
});
