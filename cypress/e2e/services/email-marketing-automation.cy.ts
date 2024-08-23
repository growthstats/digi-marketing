describe('services page spec', () => {
  beforeEach('url passes', () => {
    cy.visit('https://growthstats.io/'); // main url
    cy.get('details').click(); // click on services drop down
  });

  // Email Marketing & Automation
  it('Email Marketing & Automation', () => {
    cy.get('ul.anim-fade-to-b')
      .find('li')
      .find('a[href="/email-marketing-automation"]')
      .contains('a', 'Email Marketing & Automation')
      .click({ force: true });

    cy.get('[class*="email-marketing-hero-section_d-section"]').find('svg').should('be.visible'); // hero animation
  });

  afterEach('contact section, total contact links verification', () => {
    cy.verifyContactSectionElements(); // verify contact section elements
    cy.logContactLinksCount(); // verify number of contact links

    // Skip logCardLinksCount for the "Email Marketing & Automation" test
    cy.url().then((currentPageUrl) => {
      if (currentPageUrl !== 'https://growthstats.io/email-marketing-automation') {
        cy.logCardLinksCount(); // verify number of cards
      }
    });
  });
});
