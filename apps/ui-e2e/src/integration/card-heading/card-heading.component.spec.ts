describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=cardheadingcomponent--primary'));
  it('should render the component', () => {
    cy.get('retell-card-heading').should('exist');
  });
});