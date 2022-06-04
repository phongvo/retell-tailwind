describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=statslistcomponent--primary'));
  it('should render the component', () => {
    cy.get('retell-stats-list').should('exist');
  });
});