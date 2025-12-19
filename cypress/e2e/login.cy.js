describe('Login test', () => {

  beforeEach(() => {
    // Open page
    cy.openLoginPage()
    // Home Page Verifiction
    cy.url().should('include', '/')
  })

  describe('successfull login', () => {

    it('Should login with valid credentials', () => {

      cy.submitLoginForm('test@gmail.com', '12345678')

      cy.url().should('include', '/home')

      cy.get('h1')
        .should('be.visible')
        .and('contain.text', 'Serverest Store')

      cy.contains('button', 'Logout')
        .should('be.visible')
    })
  })

  describe('Invalid login', () => {

    it('Should not login with unregistered email', () => {

      cy.submitLoginForm('tester@gmail.com', '12345678')

      cy.contains('Email e/ou senha inválidos')
        .should('be.visible')

      cy.url().should('include', '/login')
    })

    it('Should not login with invalid password', () => {

      cy.submitLoginForm('test@gmail.com', '1234567')

      cy.contains('Email e/ou senha inválidos')
        .should('be.visible')

      cy.url().should('include', '/login')
    })
  })

})