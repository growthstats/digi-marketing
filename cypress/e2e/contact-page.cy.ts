describe('Contact Page Test Suite', () => {
  beforeEach('Navigate to Contact Page', () => {
    cy.visit('https://growthstats.io/contact'); // Visit the Contact page URL
  });

  // Test Case: Verify Contact Page Titles
  it('Should verify the main titles on the Contact page', () => {
    cy.get('h1').should('contain.text', 'Contact');
    cy.get('h3').contains('GET IN TOUCH');
  });

  // Test Case: Verify Required Child Elements
  it('Should have all required child elements in the Message Us section', () => {
    // Select the section element
    cy.get('.rt-Section')
      .eq(1)
      .should('exist') // Ensure the section exists
      .within(() => {
        // Check if the heading exists
        cy.get('h3.rt-Heading').should('contain.text', 'Message Us');
        // Check if the form exists with the correct number of child elements
        cy.get('.contact-form-section_d-section__contact-form__mETdF').should('exist').find('div').should('have.length', 15);
      });
  });
});
