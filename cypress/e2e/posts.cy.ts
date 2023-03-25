/// <reference types="cypress" />

describe('Posts', () => {
  it(' should navigate to the posts page', () => {
    cy.visit('/posts');
    cy.get('p').should('contain', 'dia');
    cy.get('[data-cy="1"]').should('exist');
    cy.get('[data-cy="1"]').click();
    cy.url().should('include', '/postId');
  });

  it('should click pagination', () => {
    cy.visit('/posts');
    cy.get('[data-cy="1"]').should('exist');
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="h2"]').should('exist');
  });
});

export {};
