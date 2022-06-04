describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=flymenucomponent--primary'));
  it('should render the component', () => {
    cy.get('retell-fly-menu').should('exist');
  });
});