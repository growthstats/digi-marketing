/// <reference types="cypress" />

describe('services page spec', () => {
  beforeEach('url passes', () => {
    cy.visit('https://growthstats.io/'); // main url
    cy.get('details').click(); // click on services drop down
  });

  // Search engine optimization
  it('Search engine optimization page', () => {
    cy.get('ul.anim-fade-to-b')
      .find('li')
      .find('a[href="/search-engine-optimization"]')
      .contains('a', 'Search Engine Optimization')
      .click({ force: true });

    cy.get('[class*="seo-section_d-section__image-wrapper"]').find('svg').should('be.visible'); // hero animation
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

  // SEM Paid Advertising
  it('SEM Paid Advertising page', () => {
    cy.get('ul.anim-fade-to-b')
      .find('li')
      .find('a[href="/sem-paid-advertising"]')
      .contains('a', 'SEM / Paid Advertising')
      .click({ force: true });

    cy.get('[class*="sem-hero-section_d-section__image-wrapper"]').find('svg').should('be.visible'); // hero animation
  });

  // Social Media Services
  it('Social Media Services page', () => {
    cy.get('ul.anim-fade-to-b')
      .find('li')
      .find('a[href="/social-media-services"]')
      .contains('a', 'Social Media Services')
      .click({ force: true });

    cy.get('[class*="social-media-services-hero-section_d-section__image-wrapper"]').find('svg').should('be.visible'); // hero animation
  });

  // Web Design
  it('Web design page', () => {
    cy.get('ul.anim-fade-to-b').find('li').find('a[href="/web-design"]').contains('a', 'Web Design').click({ force: true });

    cy.get('[class*="web-design-hero-section_d-section__image-wrapper"]').find('svg').should('be.visible'); // hero animation
  });

  // Web Development
  it('Web Development page', () => {
    cy.get('ul.anim-fade-to-b').find('li').find('a[href="/web-development"]').contains('a', 'Web Development').click({ force: true });

    cy.get('[class*="web-dev-hero-section_d-section__image-wrapper"]').find('svg').should('be.visible'); // hero animation
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
