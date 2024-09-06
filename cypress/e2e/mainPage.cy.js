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

describe('Verifica se existe uma imagem', () => {
  it('existe a tag image ".main-image"', () => {
    cy.get('.main-image')
      .should('exist')
  });

  it('A imagem não deve estár vazia', () => {
    cy.get('.main-image')
      .should('have.attr', 'src')
      .and('not.be.empty');

    cy.get('img').should('be.visible');
  });

  it('A tag deve conter um alt descritivo', () => {
    cy.get('.main-image')
    .should('have.attr', 'alt')
    .be('Omelete')
  });
});


describe('Verifica se possui um titulo', () => {
  it('Deve conter um titulo h1', () => {
    cy.get('.main-title')
    .should('exist')
  });

  cy.get('h1').should('be.visible');

  it('Deve estár com o texto correto', () => {
    cy.get('.main-title')
    .should('have.attr', 'value')
    .be('Simple Omelette Recipe')
  });
});
