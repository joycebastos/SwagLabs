/// <reference types="cypress" />

context("funcionalidade de Reordenar produtos", () => { //Funcionalidade do sistema
    describe("Cenários Reordenação", () => { //Conjunto de cenários de testes

        beforeEach(() => { //Esta função será chamada antes de cada cenário de testes ser executado
            cy.login() //Função que realiza o login. Como não estou validando o login, sempre será um login válido e precisa ser executado. É uma pré-condição estar logado
          })

        it("Reordenar os produtos pelo maior preço", () => { //Nome do cenário de testes
            cy.get('.product_sort_container').select('Price (high to low)').type('Cypress.io{enter}') //clica no botão de ordenação e escolhe a opção Maior preço          
            cy.get(':nth-child(1) > .pricebar > .inventory_item_price').invoke('text').then(($value) => {
                cy.log($value) //captura o valor da primeira peça exibida na tela após a ordeação
                expect($value).to.equal('$49.99') //compara o valor do primeiro item com o maior preço de produto existente
            })
        });

        it("Reordenar os produtos pelo menor preço", () => {
            cy.get('.product_sort_container').select('Price (low to high)').type('Cypress.io{enter}')   //clica no botão de ordenação e escolhe a opção menor preço          
            cy.get(':nth-child(1) > .pricebar > .inventory_item_price').invoke('text').then(($value) => {
                cy.log($value) //captura o valor da primeira peça exibida na tela após a ordeação
                expect($value).to.equal('$7.99') //compara o valor do primeiro item com o menor preço de produto existente
            })
        });
    });
});