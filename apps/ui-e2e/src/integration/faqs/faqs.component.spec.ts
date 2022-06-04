describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=faqscomponent--primary'));
  it('should render the component', () => {
    cy.get('retell-faqs').should('exist');
  });
});