/// <reference types="cypress" />

describe('PostId', () => {
  it(' should navigate to the postId page', () => {
    cy.visit('/posts');
    cy.get('p').should('contain', 'dia');
    cy.get('[data-cy="1"]').should('exist');
    cy.get('[data-cy="1"]').click();
    cy.url().should('include', '/postId');
    cy.get('[data-cy="title"]').should('exist');
    cy.get('[data-cy="h2"]').should('exist');
  });

  it('should return page elements postId', () => {
    cy.visit('/posts');
    cy.get('[data-cy="1"]').should('exist');
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="title"]').contains('p');
    cy.get('[data-cy="link"]').should('exist');
    cy.get('[data-cy="link"]').click();
    cy.url().should('include', '/posts');
  });
});

export {};
