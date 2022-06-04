describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=notfoundcomponent--primary'));
  it('should render the component', () => {
    cy.get('retell-not-found').should('exist');
  });
});