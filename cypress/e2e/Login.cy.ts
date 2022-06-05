describe('spec.cy.ts', () => {
  it('should visit', () => {
    cy.visit('/');
    
    cy.get('#inputEmail').type('test@example.com');
    cy.get('#inputPassword').type('changeMe');
    cy.get('button').click();

    cy.contains('div', 'successfully logged in').should('be.visible');
  });
});