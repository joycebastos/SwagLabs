/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
      login(): Chainable<string>
    }
  }

//Adição da função login para que sempre possa ser utilizada por outros cenários de testes. Neste caso como o foco não é validar o login, a função abaixo sempre será de sucesso
Cypress.Commands.add('login', () => { 
    cy.visit('/')
    cy.get('#user-name')
      .should('be.visible')
      .type('standard_user');
    cy.get('#password')
      .should('be.visible')
      .type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('#shopping_cart_container').should('be.visible')
 })
