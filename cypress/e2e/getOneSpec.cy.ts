describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://main--mppateveryone.netlify.app/')
    cy.get("#adultButton").should('exist').click();
    cy.get("#getOne-34").should('exist').click();
    cy.get("h2").contains("Info about adult");
    cy.get("#34").contains("34");
    cy.get("#Bruce_5").contains("Bruce_5");
  })
})