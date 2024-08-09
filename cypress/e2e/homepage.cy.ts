describe('homepage spec', () => {
  beforeEach('visit url passes', () => {
    // main url
    cy.visit('https://develop.growthstats.io/');
  });

  it('home page tests passes', () => {
    // home page
    cy.get('h3').eq(0).contains('We Can Improve Your Business Performance And Gain More Customers');
    cy.get('h3').eq(1).contains('Have A Project In Mind?');

    // Assuming you want to click on the first three contact buttons
    for (let i = 0; i < 3; i++) {
      cy.get("a[href='/contact']").eq(i).click();
      cy.go('back'); // Navigates back to the previous page
    }

    cy.wait(3000);
    // scroll to the contact section
    cy.get('#contact-section').scrollIntoView();
    cy.wait(3000);
    cy.get('#contact-section').should('be.visible');
    cy.wait(3000);
  });

  it('about page tests passes', () => {
    // about page
    cy.get("a[href='/about']").first().click();
    cy.get('h1').contains('About Growth Stats');
  });
});
