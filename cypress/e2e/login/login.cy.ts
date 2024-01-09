/// <reference types="cypress" />

context("funcionalidade de Login", () => { //Referencia a funcionalidade ou contexto que será testado
    describe("Cenários de login", () => { //Referente a um conjunto de cenários de testes ou casos de testes
        beforeEach(() => {
            cy.visit('/')
          })
  
        it("Login realizado com sucesso", () => { //Nome do cenário de testes que se está testando. Exemplo de cenários positivo
            cy.get('#user-name')
              .should('be.visible')
              .type('standard_user'); //Esperar o campo do login estar visível e preencher com um valor correto
            cy.get('#password')
              .should('be.visible')
              .type('secret_sauce'); //Esperar o campo da senha estar visível e preencher com um valor correto
            cy.get('#login-button').click(); //clicar no botão para realizar o login
            cy.get('#shopping_cart_container').should('be.visible') // Valida que está na tela inicial do sistema após login com sucesso
        });

        it("Não realizar login quando a senha é inválida", () => {//Nome do cenário de testes. Exemplo de um cenário negativo
            cy.get('#user-name')
              .should('be.visible')
              .type('standard_user'); //Esperar o campo do login estar visível e preencher com um valor correto
            cy.get('#password')
              .should('be.visible')
              .type('123456'); //Esperar o campo da senha estar visível e preencher com um valor INVALIDO
            cy.get('#login-button').click(); //clicar no botão para realizar o login
            cy.contains('Username and password do not match any user in this service') // Valida que não foi feito o login e uma mensagem de erro apareceu na tela
        });
    });
});

//Como estpu testando o login, então os campos foram explicitamentes preenchidos nesta ocasião