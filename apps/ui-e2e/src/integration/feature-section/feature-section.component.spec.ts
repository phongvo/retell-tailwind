describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=featuresectioncomponent--primary'));
  it('should render the component', () => {
    cy.get('retell-feature-section').should('exist');
  });
});