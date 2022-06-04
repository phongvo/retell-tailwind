describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=newslettersectioncomponent--primary'));
  it('should render the component', () => {
    cy.get('retell-newsletter-section').should('exist');
  });
});