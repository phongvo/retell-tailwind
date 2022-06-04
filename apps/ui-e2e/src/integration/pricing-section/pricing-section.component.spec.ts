describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=pricingsectioncomponent--primary'));
  it('should render the component', () => {
    cy.get('retell-pricing-section').should('exist');
  });
});