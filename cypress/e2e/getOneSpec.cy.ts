describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200')
    cy.get("#adultButton").should('exist').click();
    
  })
})