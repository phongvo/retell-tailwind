describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=logocloudscomponent--primary'));
  it('should render the component', () => {
    cy.get('retell-logo-clouds').should('exist');
  });
});