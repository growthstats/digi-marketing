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

Cypress.Commands.add('verifyContactSectionAndElementCounts', () => {
  cy.logContactLinksCount(); // Log and verify the total number of contact links

  // Conditional Check: Skip card link count verification for Contact page
  cy.url().then((currentPageUrl) => {
    if (currentPageUrl !== 'https://growthstats.io/contact') {
      cy.verifyContactSectionElements(); // Verify the contact section
    }
  });
});

// Verify the benefits section heading
Cypress.Commands.add('verifyContentOfBenefitsSection', () => {
  cy.get('h3').eq(0).contains('We Can Improve Your Business Performance And Gain More Customers');
});

// Add this custom command in your Cypress commands file
Cypress.Commands.add('selectService', (serviceName, serviceUrl) => {
  cy.get('ul.anim-fade-to-b').contains('a', serviceName).should('have.attr', 'href', serviceUrl).click({ force: true });
});
