describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=pageheadingcomponent--primary'));
  it('should render the component', () => {
    cy.get('retell-page-heading').should('exist');
  });
});