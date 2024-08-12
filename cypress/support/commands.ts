/// <reference types="cypress" />

Cypress.Commands.add('logContactLinksCount', () => {
  cy.title().then((pageTitle) => {
    cy.get('a[href="/contact"]').then(($elements) => {
      const count = $elements.length;
      cy.log('Page: ' + pageTitle + ', Number of contact links: ' + count);
    });
  });
});

Cypress.Commands.add('verifyContactSectionElements', () => {
  cy.get('.contact-section-elem').should('exist', { timeout: 5000 });
});
