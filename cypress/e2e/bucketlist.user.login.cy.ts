describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://localhost:4200/');
      Cypress.on('uncaught:exception', (err, runnable) => { return false; })
        })
  })