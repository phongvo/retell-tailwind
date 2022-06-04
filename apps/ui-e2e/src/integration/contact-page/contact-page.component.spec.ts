describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=contactpagecomponent--primary'));
  it('should render the component', () => {
    cy.get('retell-contact-page').should('exist');
  });
});