describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=teamsectioncomponent--primary'));
  it('should render the component', () => {
    cy.get('retell-team-section').should('exist');
  });
});