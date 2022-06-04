describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=herosectioncomponent--primary'));
  it('should render the component', () => {
    cy.get('retell-hero-section').should('exist');
  });
});