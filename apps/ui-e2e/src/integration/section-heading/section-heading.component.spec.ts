describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=sectionheadingcomponent--primary'));
  it('should render the component', () => {
    cy.get('retell-section-heading').should('exist');
  });
});