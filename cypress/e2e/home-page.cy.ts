describe('Home Page Test Suite', () => {
  beforeEach('Navigate to Home Page', () => {
    cy.visit('https://growthstats.io/'); // Visit the Home page URL
  });

  // Test Case: Verify images have alt text
  it('Should verify all images have alt text', () => {
    cy.get('body').find('img').should('have.attr', 'alt');
  });

  // Test Case: Verify Home Page Titles
  it('Should verify the main titles on the Home page', () => {
    // Verify the first H1 title
    cy.get('h1').eq(0).contains('Online Marketing');
    // Verify the banner text
    cy.get('div[class="banner-text_d-container__heading__rRJie text-4xl md:text-6xl"]').contains('growth stats');
  });

  // Test Case: Verify Client Logos and Service Cards
  it('Should verify the presence of client logos and the correct number of service cards', () => {
    // Verify client logos exist
    cy.get('section.section.space-y-8').find('img').should('exist');

    // Verify there are 6 service cards
    cy.get('div.services-section_d-section__cards-container__BfYQV').find('a').should('have.length', 6);

    // Verify card links
    const serviceslinks = [
      '/search-engine-optimization',
      '/email-marketing-automation',
      '/social-media-services',
      '/web-design',
      '/web-development',
      '/sem-paid-advertising',
    ];

    serviceslinks.forEach((serviceslink) => {
      cy.get('div.services-section_d-section__cards-container__BfYQV').find(`a[href="${serviceslink}"]`).should('exist');
    });

    // Verify card names
    const services = [
      'SEO Services',
      'Email Marketing & Automation',
      'Social Media Services',
      'Web Design',
      'Web Development',
      'SEM / Paid Advertising',
    ];

    services.forEach((service) => {
      cy.get('a div[data-accent-color$="blue"]').contains(service);
    });
  });

  // Test Case: Verify Benefits Section
  it('Should verify the content of the benefits section', () => {
    // Verify the benefits section heading
    cy.get('h3').eq(0).contains('We Can Improve Your Business Performance And Gain More Customers');
  });

  // Test Case: Verify Contact Section and Total Contact Links
  afterEach('Should verify the contact section and the total number of contact links', () => {
    cy.verifyContactSectionAndElementCounts();
  });
});
