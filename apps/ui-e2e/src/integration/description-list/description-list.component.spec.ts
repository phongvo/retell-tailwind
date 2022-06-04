describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=descriptionlistcomponent--primary'));
  it('should render the component', () => {
    cy.get('retell-description-list').should('exist');
  });
});