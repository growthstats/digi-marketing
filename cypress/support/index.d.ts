declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  interface Chainable<Subject = any> {
    logContactLinksCount(): Chainable<Subject>;
    verifyContactSectionElements(): Chainable<Subject>;
    logCardLinksCount(): Chainable<Subject>;
  }
}