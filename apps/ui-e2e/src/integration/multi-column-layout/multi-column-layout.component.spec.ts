describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=multicolumnlayoutcomponent--primary'));
  it('should render the component', () => {
    cy.get('retell-multi-column-layout').should('exist');
  });
});