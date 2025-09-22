
describe('Navigation Tests', () => {
  beforeEach(() => {
    // Gehe zur Startseite
    cy.visit('http://localhost:3000');
  });

  it('should display the navbar and logo', () => {
    cy.get('[data-test="navbar"]').should('be.visible');
    cy.get('[data-test="logo"]').should('contain.text', 'My Liste');
  });

  it('should navigate to Home page', () => {
    cy.get('[data-test="link-home"]').click();
    cy.url().should('eq', `http://localhost:3000/`);
  });

  it('should navigate to About page', () => {
    cy.get('[data-test="link-about"]').click();
    cy.url().should('include', '/about');
    cy.contains('About'); // Optional: check page content
  });

  it('should navigate to Todo List page', () => {
    cy.get('[data-test="link-todos"]').click();
    cy.url().should('include', '/todos');
    cy.contains('Todo'); // Optional: check page content
  });



});
