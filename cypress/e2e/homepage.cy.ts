describe('home page spec', () => {
  beforeEach('url passes', () => {
    cy.visit('https://growthstats.io/'); // main url
  });

  it('titles verification', () => {
    cy.get('h1').eq(0).contains('Online Marketing ');
    cy.get('div[class="banner-text_d-container__heading__rRJie text-4xl md:text-6xl"]').contains('growth stats');
  });

  it('client logo, cards verification', () => {
    cy.get('section.section.space-y-8').find('img').should('exist');

    cy.get(
      'div[class="rt-Grid rt-r-gtc-1 sm:rt-r-gtc-2 lg:rt-r-gtc-3 rt-r-gap-6 rt-r-w services-section_d-section__cards-container__BfYQV"]',
    )
      .find('a')
      .should('have.length', 6);
  });

  it('benefits section', () => {
    cy.get('h3').eq(0).contains('We Can Improve Your Business Performance And Gain More Customers');
  });

  it('contact section, total contact links verification', () => {
    cy.verifyContactSectionElements(); // verify elements
    cy.logContactLinksCount(); // verify contact links
    cy.checkPagePerformance(); // Check performance
  });
});
