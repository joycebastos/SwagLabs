# SwagLabs

Projeto de exemplo para realização de testes utilizando o Cypress com typescript

## Pré-requisitos:
- [NodeJS](https://nodejs.org/en/download/ "NodeJS")

## Ferramentas utilizadas:
- [VSCode](https://code.visualstudio.com/ "VSCode")
- [Cypress](https://www.npmjs.com/package/cypress "Cypress")
## Tutorial, Instalação e Execução

### Executar este projeto em sua maquina

* Em um terminal, dentro da pasta do projeto, execute o seguinte comando:

**Instalar as dependências:** 

1 - instalar módulos e dependências do node
```
npm i
```
2 - Instalar o cypress
```
npm install cypress
```
3 - Instalar o typescript
```
npm install --save-dev typescript
```
### Utilizando o cypress

* Em um terminal execute um dos comandos abaixo para abrir o cypress:
```
npm run cy:open 
```
ou
```
npx cypress open 
```
* Para executar os testes diretamente, sem abrir o Cypress use:
```
npm run cy:test 
```
ou
```
npx cypress run 
```

### Lógica utilizada para os cenários de testes
Todos os cenários de testes foram criados pensando na estrutura do cypress
 describe: geralmente é usada pra agrupar casos de testes de uma funcionalidade
   context : geralmente utilizada para agrupar os cenários de testes de UM CASO de teste
     it: utilizada para implementar o cenário de teste

* Cenários de Login
  Foi feito um cenário de teste positivo e um cenário negativo
  Como eu estava querendo validar o login, todos os passos e preenchimentos do campo ficaram explicitos

* Cenários de ordenação
 Foram feitos dois cenário posítivos
 Ordenação de MENOR valor e ao final valida se o primeiro item apresenta realmente o MENOR valor que já se tinha conhecimento que era de R$ 7,99.
 Ordenação de MAIOR valor e ao final valida se o primeiro item apresenta realmente o MAIOR valor que já se tinha conhecimento que era de R$ 49,99.

* Cenários de carrinho
 Foi feito o cenário positivo de adicionar apenas 1 item no carrinho. Ao final valida se na tela do carrinho realmente contêm 1 item que foi o que adicionamos
