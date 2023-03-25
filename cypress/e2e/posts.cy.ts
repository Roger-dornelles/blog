/// <reference types="cypress" />

describe('Posts', () => {
  it(' should navigate to the posts page', () => {
    cy.visit('/posts');
    cy.get('p').should('contain', 'dia');
    cy.get('.styles__Container-sc-c444d3b9-0 > :nth-child(1)').should('exist');
    cy.get('.styles__Container-sc-c444d3b9-0 > :nth-child(1)').click();
    cy.url().should('include', '/postId');
  });

  it('should click pagination', () => {
    cy.visit('/posts');
    cy.get('.styles__Container-sc-c444d3b9-0 > :nth-child(1)').should('exist');
    cy.get('.styles__Container-sc-c444d3b9-0 > :nth-child(1)').click();
    cy.get('.styles__Container-sc-c444d3b9-0 > :nth-child(5)').should('exist');
  });
});

export {};
