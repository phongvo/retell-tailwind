describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=pricingpagecomponent--primary'));
  it('should render the component', () => {
    cy.get('retell-pricing-page').should('exist');
  });
});