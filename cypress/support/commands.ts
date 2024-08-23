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

Cypress.Commands.add('navigateToMainUrlAndOpenServicesDropdown', () => {
  cy.visit('https://growthstats.io/'); // Visit the main URL
  cy.get('details').click(); // Open the services dropdown menu
});

Cypress.Commands.add('verifyContentOfBenefitsSection', () => {
  // Test Case: Verify Benefits Section
  it('Should verify the content of the benefits section', () => {
    cy.get('h3').eq(0).contains('We Can Improve Your Business Performance And Gain More Customers'); // Verify the benefits section heading
  });
});

Cypress.Commands.add('verifyContactSectionAndElementCounts', () => {
  cy.logContactLinksCount(); // Log and verify the total number of contact links

  // Conditional Check: Skip card link count verification for Email Marketing & Automation page
  cy.url().then((currentPageUrl) => {
    if (currentPageUrl !== 'https://growthstats.io/email-marketing-automation') {
      cy.logCardLinksCount(); // Log and verify the number of cards
    }
  });

  // Conditional Check: Skip card link count verification for Contact page
  cy.url().then((currentPageUrl) => {
    if (currentPageUrl !== 'https://growthstats.io/contact') {
      cy.verifyContactSectionElements(); // Verify the contact section
    }
  });
});
