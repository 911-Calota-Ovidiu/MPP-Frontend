describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://main--mppateveryone.netlify.app/')
    cy.get("#adultButton").should('exist').click();

  })
})