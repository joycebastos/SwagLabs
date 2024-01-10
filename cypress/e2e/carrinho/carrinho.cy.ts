/// <reference types="cypress" />

context("funcionalidade de Carrinho", () => { //Funcionalidade do sistema
    describe("Cenários de adicionar produtos no carrinho", () => { //Conjunto de cenários de testes

        beforeEach(() => { //Esta função será chamada antes de cada cenário de testes ser executado
            cy.login() //Função que realiza o login. Como não estou validando o login, sempre será um login válido e precisa ser executado. É uma pré-condição estar logado
          })

        it("Adicionar apenas 1 item do produto Bolt T-Shirt no carrinho", () => { //Nome do cenário de testes
            cy.get(':nth-child(3) > .pricebar > .btn_primary').click(); //adicionando a t-shirt
            cy.get('.shopping_cart_link').click()
            cy.get('.subheader').invoke('text').then(($valueTitle) => {
                cy.log($valueTitle) //captura o valor do título da tela
                expect($valueTitle).to.equal('Your Cart') //Valida se o título é Your Cart
            });
            cy.get('.cart_quantity').invoke('text').then(($valueQTY) => {
                cy.log($valueQTY) //captura o valor da quantidade de itens na tela do carrinho
                expect($valueQTY).to.equal('1') // valida se a quantidade no carrinho é igual a 1
            });
            cy.get('.inventory_item_name').invoke('text').then(($valueDescription) => {
                cy.log($valueDescription) //captura o texto do item que está no carrinho
                expect($valueDescription).to.equal('Sauce Labs Bolt T-Shirt') //Valida se o título do item é Sauce Labs Bolt T-Shirt
            });
        });
    });
});