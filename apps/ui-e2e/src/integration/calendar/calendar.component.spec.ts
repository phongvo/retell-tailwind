describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=calendarcomponent--primary'));
  it('should render the component', () => {
    cy.get('retell-calendar').should('exist');
  });
});