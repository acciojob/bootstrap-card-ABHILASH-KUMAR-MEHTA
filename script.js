//your code here
describe('Bootstrap Cards Test', () => {
  it('should find the card with bg-danger class', () => {
    // Visit the local or deployed URL
    cy.visit('http://localhost:3000'); // Replace with your actual local server or deployed URL

    // Check for the card with class 'bg-danger'
    cy.get('.card.bg-danger').should('be.visible');

    // Assert the header and text within the card
    cy.get('.card.bg-danger .card-header').contains('Alert');
    cy.get('.card.bg-danger .card-title').contains('Node Dead');
    cy.get('.card.bg-danger .card-text').contains(
      'Node 5 (east-us) is offline for the last 12 days.'
    );
  });

  it('should find the Read More button in the first card', () => {
    // Check for the 'Read more' button in the first card
    cy.get('.card .btn.btn-primary').should('be.visible').contains('Read more');
  });

  it('should find the last card with text-muted content', () => {
    // Check the last card for the "Last updated" text
    cy.get('.card .text-muted').should('be.visible').contains('Last updated 12 mins ago');
  });
});
