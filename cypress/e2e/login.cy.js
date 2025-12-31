describe('Login test', () => {

  beforeEach(() => {
    cy.openLoginPage()
    cy.url().should('include', '/')
  })

// ------------- SUCCESSFULL LOGIN  ------------- 
  describe('successfull login', () => {

    it('Should login with valid credentials', () => {

      cy.submitLoginForm(
        Cypress.env('ADMIN_USER'),
        Cypress.env('ADMIN_PASS')
      )

      cy.url().should('include', '/home')

      cy.get('h1')
        .should('be.visible')
        .and('contain.text', 'Serverest Store')

      cy.contains('button', 'Logout')
        .should('be.visible')
    })
  })

// ------------- INVALID LOGIN  ------------- 
const INVALID_USER = 'test'
const INVALID_PASS = 'pass'

  describe('Invalid login', () => {

    it('Should not login with unregistered email', () => {

      cy.submitLoginForm(
        INVALID_USER,
        Cypress.env('ADMIN_PASS')
      )

      cy.contains('Email e/ou senha inválidos')
        .should('be.visible')

      cy.url().should('include', '/login')
    })

    it('Should not login with invalid password', () => {

      cy.submitLoginForm(
        Cypress.env('ADMIN_USER'),
        INVALID_PASS
      )

      cy.contains('Email e/ou senha inválidos')
        .should('be.visible')

      cy.url().should('include', '/login')
    })
  })

})