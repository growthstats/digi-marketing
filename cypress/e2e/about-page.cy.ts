describe('About Page Test Suite', () => {
  beforeEach('Navigate to About Page', () => {
    cy.visit('https://growthstats.io/about'); // Visit the About page URL
  });

  // Test Case: Verify About Page Elements
  it('Should verify the presence of key elements on the About page', () => {
    // Verify the heading text
    cy.get('h1').contains('About Growth Stats');

    // Verify the visibility of the "About Us" section image
    cy.get('img[alt="About Us Section Image"]').should('be.visible');
  });

  // Test Case: Verify Contact Section and Total Contact Links
  afterEach('Should verify the contact section and the total number of contact links', () => {
    cy.verifyContactSectionAndElementCounts();
  });
});
