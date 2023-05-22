describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://main--mppateveryone.netlify.app/')
    cy.get("#adultButton").should('exist').click();
    cy.wait(1500);
    cy.get("#getOne-34").should('exist').click();
    cy.get("h2").contains("Info about adult");
    
  })
})