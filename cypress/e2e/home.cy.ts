/// <reference types="cypress" />

describe('Home', () => {
  it('should return elements Home', () => {
    cy.visit('/');
    cy.get('h1').should('contain', 'Bloguinho');
    cy.get('p').should('contain', 'aqui.');
    cy.get('p').contains('saiba');
  });
});
export {};
