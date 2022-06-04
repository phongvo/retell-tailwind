describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=contactsectioncomponent--primary'));
  it('should render the component', () => {
    cy.get('retell-contact-section').should('exist');
  });
});