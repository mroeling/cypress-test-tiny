describe('page', () => {
  it('works', () => {
    cy.server();
    cy.route({
        method: "POST",
        url: `http://localhost:3000/testurl`,
        response: "response",
        onRequest(args) {
            console.log(args);
        }
    }).as("SessionLogin");

    cy.visit('http://localhost:3000/');
    cy.get('#submit').click();
  })
})
