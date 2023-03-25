/// <reference types="cypress" />

describe('empresas', () => {
  beforeEach(() => {
    cy.visit('/users');
  });

  it(' should navigate to the company page', () => {
    cy.get('.styles__H2-sc-94858a8c-1').should('exist');
    cy.get('.styles__H2-sc-94858a8c-1').should('contain', 'parceiras');
    cy.get(':nth-child(1) > .styles__User-sc-94858a8c-6').should('exist');
    cy.get(':nth-child(1) > .styles__User-sc-94858a8c-6 > a > :nth-child(3)').contains('Contato');
  });

  it('should return page elements company', () => {
    cy.get(':nth-child(3) > .styles__User-sc-94858a8c-6').should('exist');
    cy.get(':nth-child(3) > .styles__User-sc-94858a8c-6').click();
    cy.url().should('include', '/user');
    cy.get('.styles__Link-sc-b64562ac-1 > a').contains('Voltar');
    cy.get('.styles__Link-sc-b64562ac-1 > a').click();
    cy.url().should('include', '/users');
  });
});

export {};
