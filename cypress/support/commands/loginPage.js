Cypress.Commands.add("login", (uUrl, uId, uPwd) => {
  cy.get('button:contains("Login")').should("be.visible");
  cy.get('')
});
