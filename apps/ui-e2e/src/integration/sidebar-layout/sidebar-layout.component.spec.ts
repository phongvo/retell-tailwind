describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=sidebarlayoutcomponent--primary'));
  it('should render the component', () => {
    cy.get('retell-sidebar-layout').should('exist');
  });
});