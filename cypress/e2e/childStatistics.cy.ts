describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://main--mppateveryone.netlify.app/');
    cy.get("#childButton").should('exist').click();
    cy.wait(1500);
  })
})