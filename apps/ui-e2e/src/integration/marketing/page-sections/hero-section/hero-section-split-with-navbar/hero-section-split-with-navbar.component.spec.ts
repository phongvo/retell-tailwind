describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=herosectionsplitwithnavbarcomponent--primary'));
  it('should render the component', () => {
    cy.get('retell-hero-section-split-with-navbar').should('exist');
  });
});