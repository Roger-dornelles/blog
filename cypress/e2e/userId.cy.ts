/// <reference types="cypress" />

describe('userId', () => {
  beforeEach(() => {
    cy.visit('/users');
  });

  it(' should navigate to the company page return elements', () => {
    cy.get('[data-cy="1"]').should('exist');
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="strong"]').contains('Responsável');
    cy.get('[data-cy="contact"]').contains('Contato');
    cy.url().should('include', '/user');
  });

  it('should return page elements company', () => {
    cy.get('[data-cy="1"]').should('exist');
    cy.get('[data-cy="1"]').click();
    cy.url().should('include', '/user');
    cy.get('[data-cy="location"]').contains('Localização');
  });
});

export {};
