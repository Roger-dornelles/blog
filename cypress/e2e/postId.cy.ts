/// <reference types="cypress" />

describe('PostId', () => {
  it(' should navigate to the postId page', () => {
    cy.visit('/posts');
    cy.get('p').should('contain', 'dia');
    cy.get('.styles__Container-sc-c444d3b9-0 > :nth-child(1)').should('exist');
    cy.get('.styles__Container-sc-c444d3b9-0 > :nth-child(1)').click();
    cy.url().should('include', '/postId');
    cy.get('.styles__Container-sc-ef0a6865-0 > :nth-child(4)').should('exist');
    cy.get('.styles__CommentsContainer-sc-ef0a6865-6 > :nth-child(4)').should('exist');
  });

  it('should return page elements postId', () => {
    cy.visit('/posts');
    cy.get('.styles__Container-sc-c444d3b9-0 > :nth-child(2)').should('exist');
    cy.get('.styles__Container-sc-c444d3b9-0 > :nth-child(2)').click();
    cy.get('.styles__Post-sc-ef0a6865-3').contains('p');
    cy.get('.styles__Link-sc-ef0a6865-1 > a').should('exist');
    cy.get('.styles__Link-sc-ef0a6865-1 > a').click();
    cy.url().should('include', '/posts');
  });
});

export {};
