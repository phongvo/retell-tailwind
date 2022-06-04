describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=bannercomponent--primary'));
  it('should render the component', () => {
    cy.get('retell-banner').should('exist');
  });
});