/// <reference types="cypress" />

describe('empresas', () => {
  beforeEach(() => {
    cy.visit('/users');
  });

  it(' should navigate to the company page', () => {
    cy.get('[data-cy="1"]').should('exist');
    cy.get('[data-cy="h2"]').should('contain', 'parceiras');
    cy.get('[data-cy="contact"]').should('exist');
    cy.get('[data-cy="contact"]').contains('Contato');
  });

  it('should return page elements company', () => {
    cy.get('[data-cy="container"]').should('exist');
    cy.get('[data-cy="1"]').click();
    cy.url().should('include', '/user');
    cy.get('[data-cy="exit"]').contains('Voltar');
    cy.get('[data-cy="exit"]').click();
    cy.url().should('include', '/users');
  });
});

export {};
