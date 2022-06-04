describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=blogsectioncomponent--primary'));
  it('should render the component', () => {
    cy.get('retell-blog-section').should('exist');
  });
});