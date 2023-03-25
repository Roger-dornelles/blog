/// <reference types="cypress" />

describe('userId', () => {
  beforeEach(() => {
    cy.visit('/users');
  });

  it(' should navigate to the company page return elements', () => {
    cy.get(':nth-child(1) > .styles__User-sc-94858a8c-6').should('exist');
    cy.get(':nth-child(1) > .styles__User-sc-94858a8c-6').click();
    cy.get('.styles__InfoContainer-sc-b64562ac-3 > :nth-child(1)').contains('Responsável');
    cy.get('.styles__InfoContainer-sc-b64562ac-3 > :nth-child(1) > :nth-child(4)').contains('Contato');
    cy.url().should('include', '/user');
  });

  it('should return page elements company', () => {
    cy.get(':nth-child(1) > .styles__User-sc-94858a8c-6').should('exist');
    cy.get(':nth-child(1) > .styles__User-sc-94858a8c-6').click();
    cy.url().should('include', '/user');
    cy.get('.styles__InfoContainer-sc-b64562ac-3 > :nth-child(3)').contains('Localização');
  });
});

export {};
