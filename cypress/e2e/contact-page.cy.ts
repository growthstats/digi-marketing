describe('Contact page Tets Suite', () => {
  beforeEach('navigate to contact Page', () => {
    cy.visit('https://growthstats.io/contact'); // Visit the Contact page URL
  });

  // Test Case: Verify Contact Page Titles
  it('Should verify the main titles on the Contact page', () => {
    cy.get('h1').contains('Contact');
    cy.get('h3').contains('GET IN TOUCH');
  });

  it('should have all required child elements', () => {
    // Select the section element
    cy.get('.rt-Section')
      .eq(1)
      .should('exist') // Ensure the section exists
      .within(() => {
        // Check if the heading exists
        cy.get('h3.rt-Heading').contains('Message Us');
        // Check if the form exists
        cy.get('.contact-form-section_d-section__contact-form__mETdF').should('exist').find('div').should('have.length', 15);
      });
  });
});
