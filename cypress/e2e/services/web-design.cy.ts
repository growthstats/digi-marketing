describe('services page spec', () => {
  beforeEach('url passes', () => {
    cy.visit('https://growthstats.io/'); // main url
    cy.get('details').click(); // click on services drop down
  });

  // Web Design
  it('Web design page', () => {
    cy.get('ul.anim-fade-to-b').find('li').find('a[href="/web-design"]').contains('a', 'Web Design').click({ force: true });

    cy.get('[class*="web-design-hero-section_d-section__image-wrapper"]').find('svg').should('be.visible'); // hero animation
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
