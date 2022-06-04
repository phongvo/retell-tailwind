describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=statssectioncomponent--primary'));
  it('should render the component', () => {
    cy.get('retell-stats-section').should('exist');
  });
});