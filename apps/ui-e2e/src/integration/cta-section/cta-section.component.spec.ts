describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=ctasectioncomponent--primary'));
  it('should render the component', () => {
    cy.get('retell-cta-section').should('exist');
  });
});