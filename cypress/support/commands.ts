/// <reference types="cypress" />

Cypress.Commands.add('logContactLinksCount', () => {
  cy.title().then((pageTitle) => {
    cy.get('a[href="/contact"]').then(($links) => {
      const linkcount = $links.length;
      cy.log('Page: ' + pageTitle);
      cy.log('Number of contact links: ' + linkcount);
    });
  });
});

Cypress.Commands.add('logCardLinksCount', () => {
  cy.get('[id*="service-card--"]').then(($cards) => {
    const cardcount = $cards.length;
    cy.log('Number of cards: ' + cardcount);
  });
});

Cypress.Commands.add('verifyContactSectionElements', () => {
  cy.get('.contact-section-elem').should('exist', { timeout: 5000 });
});
