describe('Login', () => {

  // Login com email e senha cadastrado com Sucesso!!
  it('deve realizar login com sucesso', () => {

    // Chamdando a function Start
    cy.start()
    // Chamando função Commands
    cy.submitLoginForm('matheus@gmail.com', '12345678')

    // Validando que a página home carregou corretamente
    cy.get('h1').should('be.visible')
  })

  // Email não Cadastrado!!
  it('Não deve Logar com Email cadastrado', () => {

    // Chamdando a function Start
    cy.start()
    // Chamando função Commands
    cy.submitLoginForm('matheu@gmail.com', '12345678')

    // Verificando mensagem de Erro!!!
    cy.contains('Email e/ou senha inválidos')
      .should('be.visible')
  })

  // Senha invalida!!
  it('Não deve Logar com Senha Inválida', () => {

    // Chamdando a function Start
    cy.start()
    // Chamando função Commands
    cy.submitLoginForm('matheus@gmail.com', '1234567')

    // Verificando mensagem de Erro!!!
    cy.contains('Email e/ou senha inválidos')
      .should('be.visible')
  })
})
