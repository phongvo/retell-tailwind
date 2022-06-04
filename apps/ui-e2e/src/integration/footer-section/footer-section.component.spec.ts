describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=footersectioncomponent--primary'));
  it('should render the component', () => {
    cy.get('retell-footer-section').should('exist');
  });
});