# Project-01 – Testes E2E de Login com Cypress

## 📌 Visão Geral

Este projeto faz parte do meu portfólio como **QA em formação**, com foco em **testes automatizados E2E** utilizando **Cypress**.

O objetivo principal é validar o fluxo de **login** de uma aplicação web, cobrindo cenários **válidos e inválidos**, aplicando **boas práticas de organização, reutilização e manutenção de testes**.

---

## 🎯 Objetivos do Projeto

* Validar o fluxo de login com credenciais válidas
* Garantir que o sistema não permita login com dados inválidos
* Cobrir cenários negativos (email inválido, senha inválida, campos vazios)
* Utilizar **fixtures** para massa de dados
* Utilizar **commands customizados** para reduzir duplicação de código
* Manter testes limpos, legíveis e escaláveis

---

## 🧪 Cenários Automatizados

### ✅ Login Válido

* Login com credenciais corretas
* Validação de redirecionamento para a página `/home`
* Validação de mensagem de boas-vindas
* Validação da visibilidade do botão **Logout**

### ❌ Login Inválido (com Fixture)

Os cenários abaixo são controlados via `fixture`:

* Email inválido
* Senha inválida
* Email vazio
* Senha vazia

Cada cenário valida a **mensagem de erro exibida pela aplicação**.

---

## 🗂️ Estrutura do Projeto

```
cypress/
├── e2e/
│   ├── login.cy.js
│   └── cadastro.cy.js
│
├── fixtures/
│   ├── user.json
│   └── login.json
│
├── support/
│   ├── commands.js
│   └── e2e.js
│
├── cypress.config.js
├── package.json
```

---

## 📦 Fixtures

### `user.json`

Responsável por dados **não sensíveis** exibidos na interface:

```json
{
  "admin": {
    "name": "test"
  }
}
```

### `login.json`

Responsável pelos **cenários de login inválido**:

```json
{
  "invalid": [
    {
      "scenario": "email inválido",
      "email": "email@invalido.com",
      "password": "12345678",
      "message": "Email e/ou senha inválidos"
    }
  ]
}
```

---

## 🔧 Commands Customizados

O projeto utiliza um command customizado para centralizar o fluxo de login:

* Trata campos vazios corretamente
* Evita erros com `cy.type("")`
* Simula o comportamento real do usuário

Isso garante **reutilização** e **manutenção facilitada**.

---

## 🔐 Variáveis de Ambiente

As credenciais são mantidas no `cypress.config.js` usando `env`:

```js
env: {
  ADMIN_USER: 'email@teste.com',
  ADMIN_PASS: 'senha'
}
```

> Dados sensíveis **não são versionados** em produção real.

---

## ▶️ Como Executar o Projeto

### Instalar dependências

```bash
npm install
```

### Abrir o Cypress

```bash
npx cypress open
```

### Executar em modo headless

```bash
npx cypress run
```

---

## 🧠 Boas Práticas Aplicadas

* Separação clara entre **dados**, **lógica** e **assertivas**
* Uso correto de `fixture` vs `env`
* Testes resilientes (menos falso negativo)
* Código limpo e organizado
* Padrão utilizado em projetos reais de QA

---

## 🚀 Próximos Passos

* Replicar o mesmo padrão nos próximos projetos (Project-02 ao Project-08)
* Evoluir para testes com `cy.intercept`
* Utilizar `data-testid` para seletores mais robustos

---

## 👤 Autor

**Matheus Souza**
QA em formação | Testes Automatizados | Cypress

---

📌 *Este projeto faz parte de um plano contínuo de evolução prática em QA.*
