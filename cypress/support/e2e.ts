import './commands';

beforeEach('Navigate to Home Page', () => {
  cy.visit('https://growthstats.io/'); // Visit the Home page URL
});
