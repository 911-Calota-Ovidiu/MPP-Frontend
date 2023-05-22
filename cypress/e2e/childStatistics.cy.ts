describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://main--mppateveryone.netlify.app/');
    cy.get("#childButton").should('exist').click();
    cy.wait(1500);
    cy.get("#childStat").should('exist').click();
    cy.get("#h3").contains("4.9997");
  })
})