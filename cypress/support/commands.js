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

Cypress.Commands.add('openLoginPage', () => {

    cy.viewport(1440, 900)
    cy.visit('https://front.serverest.dev')
})

Cypress.Commands.add('submitLoginForm', (email, password) => {

    cy.get('#email')
        .should('be.visible')
        .clear()
        .type(email)

    cy.get('#password')
        .should('be.visible')
        .clear()
        .type(password)

    cy.contains('button', 'Entrar')
        .should('be.visible')
        .and('be.enabled')
        .click()
})

Cypress.Commands.add('cadastro', (name, email, password) => {

    cy.get('[data-testid="cadastrar"]')
        .should('be.visible')
        .click()

    cy.get('[data-testid="nome"]')
        .should('be.visible')
        .clear()
        .type(name)

    cy.get('[data-testid="email"]')
        .should('be.visible')
        .clear()
        .type(email)

    cy.get('[data-testid="password"]')
        .should('be.visible')
        .clear()
        .type(password)

    cy.get('[data-testid="checkbox"]')
        .check()
        .should('be.checked')

    cy.get('[type="submit"]')
        .should('be.enabled')
        .click()
})