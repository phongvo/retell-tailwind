describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=herosectionsimplecenteredcomponent--primary'));
  it('should render the component', () => {
    cy.get('retell-hero-section-simple-centered').should('exist');
  });
});