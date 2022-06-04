describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=headersectioncomponent--primary'));
  it('should render the component', () => {
    cy.get('retell-header-section').should('exist');
  });
});