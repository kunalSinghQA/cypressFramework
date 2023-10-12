/// <reference types="cypress" />

describe("Testing login page", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("Base_URL"));
    cy.get('button:contains("Login")').should("be.visible");
  });

  it("Testing login functionality", () => {
    cy.get('button:contains("Login")')
      .should("be.visible")
      .click()
      .then(() => {
        cy.get("#email").should("be.visible");
        cy.get("#email").type("bedahe1803@mugadget.com");
        cy.get("#password").type("Rayjohn@123");
        cy.intercept("GET", "https://platformapi.qure.ai/profile/").as(
          "profileDetails"
        );
        cy.get("#kc-login").click();
        cy.wait("@profileDetails").then(({ response }) => {
          cy.log(JSON.stringify(response, null, 2));
        });
      });
    it("Validating Cookies", () => {
      cy.get('button:contains("Login")')
        .should("be.visible")
        .click()
        .then(() => {
          cy.get("#email").should("be.visible");
          cy.get("#email").type("bedahe1803@mugadget.com");
          cy.get("#password").type("Rayjohn@123");
          cy.intercept("GET", "https://platformapi.qure.ai/profile/").as(
            "profileDetails"
          );
          cy.get("#kc-login").click();
          cy.wait("@profileDetails").then(({ response }) => {
            cy.log(JSON.stringify(response, null, 2));
          });
        });
    });
  });
});
