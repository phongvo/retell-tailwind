describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=testimonialscomponent--primary'));
  it('should render the component', () => {
    cy.get('retell-testimonials').should('exist');
  });
});