

describe('Meine Todo-App', () => {
  // Vor jedem Test die App besuchen
  beforeEach(() => {
    cy.visit('http://localhost:3000/todos');
  });

  it('zeigt die Startseite an', () => {
    cy.get('[data-test="todo-title"]').should('be.visible');
  });

  it('fügt eine neue Aufgabe hinzu', () => {
    const taskText = `Neue Aufgabe ${Date.now()}`; // Einzigartiger Task

    cy.get('[data-test="new-task-input"]', { timeout: 10000 }).type(taskText);
    cy.get('[data-test="add-task-button"]').click();

    cy.contains('[data-test="task-text"]', taskText, { timeout: 10000 })
      .should('be.visible');
  });
  
  it('markiert eine Aufgabe als erledigt', () => {
    // Nimm die erste Aufgabe in der Liste
    cy.get('[data-test="task-item"]', { timeout: 10000 }).first().then(($el) => {
      cy.wrap($el).find('[data-test="toggle-task-button"]').click();

      // Prüfe, dass der Text durchgestrichen ist
      cy.wrap($el).find('[data-test="task-text"]', { timeout: 10000 })
        .should('have.css', 'text-decoration')
        .and((decoration) => {
          expect(decoration).to.match(/line-through/);
        });
    });
  });

  it('löscht eine Aufgabe', () => {
    // Nimm die erste Aufgabe in der Liste
    cy.get('[data-test="task-item"]', { timeout: 10000 }).first().then(($el) => {
      const taskText = $el.find('[data-test="task-text"]').text();

      cy.wrap($el).find('[data-test="delete-task-button"]').click();

      cy.contains('[data-test="task-text"]', taskText, { timeout: 10000 }).should('not.exist');
    });
  });
});
