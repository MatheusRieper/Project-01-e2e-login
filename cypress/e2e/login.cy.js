describe('Login', () => {

    beforeEach(() => {
    cy.visit('https://front.serverest.dev/admin/home')
  })

  // Login com email e senha cadastrado com Sucesso!!
  it('deve realizar login com sucesso', () => {

    // Preenchendo o formulário de login
    cy.get('[data-testid="email"]').type('matheus@gmail.com')
    cy.get('[data-testid="senha"]').type('12345678')

    cy.contains('button', 'Entrar').click()

    // Validando que a página home carregou corretamente
    cy.get('h1').should('be.visible')
  })

  // Email não Cadastrado!!
  it('Não deve Logar com Email cadastrado', () => {

    // Preenchendo o formulário de login
    cy.get('[data-testid="email"]').type('matheu@gmail.com')
    cy.get('[data-testid="senha"]').type('12345678')

    cy.contains('button', 'Entrar').click()

    // Verificando mensagem de Erro!!!
    cy.contains('Email e/ou senha inválidos')
      .should('be.visible')
  })

  // Senha invalida!!
  it('Não deve Logar com Senha Inválida', () => {

    // Preenchendo o formulário de login
    cy.get('[data-testid="email"]').type('matheus@gmail.com')
    cy.get('[data-testid="senha"]').type('1234567')

    cy.contains('button', 'Entrar').click()

    // Verificando mensagem de Erro!!!
    cy.contains('Email e/ou senha inválidos')
      .should('be.visible')
  })
})
