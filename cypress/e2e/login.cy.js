describe('Login', () => {
  it('deve realizar login com sucesso', () => {

    // Entrando no site
    cy.visit('https://front.serverest.dev/admin/home');

    // Preenchendo o formulário de login
    cy.get('[placeholder="Digite seu email"]').type('matheusrieper8@gmail.com');
    cy.get('[placeholder="Digite sua senha"]').type('Emilly2015.');

    // Clicando no botão Entrar
    cy.contains('button', 'Entrar').click();

    // Validando que a página home carregou corretamente
    cy.get('h1').should('be.visible');
  });
});
