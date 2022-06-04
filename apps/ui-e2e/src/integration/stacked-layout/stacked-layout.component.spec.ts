describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=stackedlayoutcomponent--primary'));
  it('should render the component', () => {
    cy.get('retell-stacked-layout').should('exist');
  });
});