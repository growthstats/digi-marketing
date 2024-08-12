describe('about page spec', () => {
  beforeEach('url passes', () => {
    cy.visit('https://growthstats.io/'); // main url
  });

  it('about page tests passes', () => {
    cy.get("a[href='/about']").first().click();
    cy.get('h1').contains('About Growth Stats');

    // verify about us section img
    cy.get("img[alt='About Us Section Image']").should('be.visible');
  });

  it('contact section, total contact links verification', () => {
    cy.verifyContactSectionElements(); // verify elements
    cy.logContactLinksCount(); // verify contact links
  });
});
