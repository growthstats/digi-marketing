/// <reference types="cypress" />

describe('services page spec', () => {
  beforeEach('url passes', () => {
    cy.visit('https://growthstats.io/'); // main url
  });

  it('service page', () => {
    cy.get('details').click();
  });

  it('search engine optimization page', () => {
    cy.get('ul.anim-fade-to-b')
      .find('li')
      .find('a[href="/search-engine-optimization"]')
      .contains('a', 'Search Engine Optimization')
      .click({ force: true });

    cy.get("g[clip-path='url(#__lottie_element_2)']").should('be.visible');

    // cards count
    cy.get('.rt-Box .service-card_d-container__cCpNa').should('have.length', 4);

    it('contact section, total contact links verification', () => {
      cy.verifyContactSectionElements(); // verify elements
      cy.logContactLinksCount(); // verify contact links
    });
  });
});
