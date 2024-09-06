describe('Verifica se conecta a pagina', () => {
  it('Deve carregar a pagina', () => {
    cy.visit('http://localhost:5500/')
  });
});

describe('Verifica a cor do background', () => {
  it('Deve ter o background da cor correta', () => {
    cy.get('body')
      .should('have.css', 'background-color', 'rgb(255, 245, 250)')
  });
});
