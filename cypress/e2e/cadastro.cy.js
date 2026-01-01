describe('test Registered', () => {

    beforeEach(() => {
        cy.openLoginPage()
        cy.url().should('include', '/')
    })

    describe('Registered', () => {

        it('should register a new user successfully', () => {

            cy.cadastro(
                Cypress.env('ADMIN_NAME'),
                Cypress.env('ADMIN_USER'),
                Cypress.env('ADMIN_PASS')
            )

            cy.url().should('include', '/home')

            cy.contains('h1', 'Bem Vindo')
                .should('contain.text', Cypress.env('ADMIN_NAME'))


            cy.contains('button', 'Logout')
                .should('be.visible')
        })
    })
})