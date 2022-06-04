describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=contentsectioncomponent--primary'));
  it('should render the component', () => {
    cy.get('retell-content-section').should('exist');
  });
});