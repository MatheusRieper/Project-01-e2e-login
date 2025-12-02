// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


<<<<<<< HEAD
=======
// Criando comando de Iniciar a Pagina
Cypress.Commands.add('start', () => {

>>>>>>> 0a5fde7 (Refatorado: comandos customizados e organização dos testes de login)
    cy.viewport(1440, 900)  // Redimencionando Resolução de tela
    cy.visit('https://front.serverest.dev/admin/home') // Entrando no Site

})
// Criando comando de login
Cypress.Commands.add('submitLoginForm', (email, senha) => {

    // Preenchendo o formulário de login
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="senha"]').type(senha)

    cy.contains('button', 'Entrar').click()

})
