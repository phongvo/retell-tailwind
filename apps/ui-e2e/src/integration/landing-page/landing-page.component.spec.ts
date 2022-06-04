describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=landingpagecomponent--primary'));
  it('should render the component', () => {
    cy.get('retell-landing-page').should('exist');
  });
});