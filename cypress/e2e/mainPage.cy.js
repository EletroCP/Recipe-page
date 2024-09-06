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

    cy.get('h1').should('be.visible');
  });


  it('Deve estar com o texto correto', () => {
    cy.get('.main-title')
    .should('have.attr', 'value')
    .be('Simple Omelette Recipe')
  });
});

describe('Verificase possui texto descritivo', () => {
  it('Deve estar com a descrição da receita', () => {
    cy.get('.main-description')
      .should('exist');

    cy.get('.main-description')
      .should('have.attr')
      .invoke('text')
      .should('have.length', 177)
  });
});

describe('Verifica se possui uma lista com o tempo de preparação', () => {
  it('Existe uma ul com o id "preparation-time"', () => {
    cy.get('ul')
    .should('have.attr', 'id', 'preparation-time');
  });

  it('Se essa lista possui o numero correto de itens', () => {
    cy.get('ul#preparation-time')
    .find('li')
    .should('have.length', 3);
  });
});

describe('Verifica se possui uma lista com os igredientes', () => {
  it('Existe uma ul com o id "igredients"', () => {
    cy.get('ul')
    .should('have.attr', 'id', 'igredients');
  });

  it('Se essa lista possui o numero correto de itens', () => {
    cy.get('ul#igredients')
    .find('li')
    .should('have.length', 5);
  });
});

describe('Verifica se possui uma lista com as instruções', () => {
  it('Existe uma ul com o id "instructions"', () => {
    cy.get('ol')
    .should('have.attr', 'id', 'instructions');
  });

  it('Se essa lista possui o numero correto de itens', () => {
    cy.get('ul#igredients')
    .find('li')
    .should('have.length', 6);
  });
});

describe('Verifica a tabela nutricional', () => {
  it('Verifica se esta sessão possui um titulo', () => {
    cy.get('h2')
    .should('have.attr', 'id', '.nutrition-title')
    .and('have.attr', 'value', 'Nutrition');
  });

  it('Verifica se esta sessão possui um descritivo', () => {
    cy.get('p')
    .should('have.attr',  'id', '.nutrition-describe')

    cy.get('#nutrition-describe')
      .should('have.attr')
      .invoke('text')
      .should('have.length', 85)
  });

  it('Deve ter 2 colunas e cada coluna com 5 linhas', () => {
    cy.get('table#nutritional-table')
      .find('tr')
      .should('have.length', 5);

    cy.get('table#nutritional-table')
      .find('tr').each(($row) => {
        cy.wrap($row)
          .find('td')
          .should('have.length', 2);
      });
  });
});