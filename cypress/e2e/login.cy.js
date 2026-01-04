describe('Login test', function () {

  beforeEach(function () {
    cy.openLoginPage()
    cy.url().should('include', '/')
    cy.fixture('user').as('user')
  })

// ------------- SUCCESSFULL LOGIN  ------------- 
  describe('successfull login', function () {

    it('Should login with valid credentials', function () {

      cy.submitLoginForm(
        Cypress.env('ADMIN_USER'),
        Cypress.env('ADMIN_PASS')
      )

      cy.url().should('include', '/home')

      cy.get('h1')
        .should('be.visible')
        .and('contain.text', 'Bem Vindo')
        .and('contain.text', this.user.admin.name)

      cy.contains('button', 'Logout')
        .should('be.visible')
    })
  })

// ------------- INVALID LOGIN  ------------- 
  describe('Invalid login', function () {

    beforeEach(function () {
      cy.fixture('login').as('login')
    })

    it('Should not login with unregistered', function () {

        this.login.invalid.forEach((data) => {

          cy.submitLoginForm(data.email, data.password)

          cy.contains(data.message)
          .should('be.visible')

          cy.reload()
        })
    })
  })

})