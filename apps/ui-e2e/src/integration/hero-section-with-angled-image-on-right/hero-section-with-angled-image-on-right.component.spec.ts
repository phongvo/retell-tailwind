describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=herosectionwithangledimageonrightcomponent--primary'));
  it('should render the component', () => {
    cy.get('retell-hero-section-with-angled-image-on-right').should('exist');
  });
});