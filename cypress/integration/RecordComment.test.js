/* eslint-disable-next-line */
/// <reference types="Cypress" />
import { pageUrl, user } from "../Helper";

describe("Record Comment", () => {
  it("should successfully record a statement and save it", () => {
    cy.visit(pageUrl);
    // eslint-disable-next-line no-unused-vars
    cy.get("[data-test=statement]").first().within(($Statement) => {
      cy.get("[data-test=create-comment-button]").should("have.length", 1).click();
    });
    // eslint-disable-next-line no-unused-vars
    cy.get("form").within(($form) => {
      cy.get('[type="email"]').type(user.email);
      cy.get('[type="password"]').type(user.password);
      cy.contains("Anmelden").should("have.length", 1).click();
    });
    cy.contains(`Hallo ${user.firstName} ${user.lastName}`);
    cy.get("[data-test=accept-terms-button]").should("have.length", 1).click();
    cy.get("[data-test=start-recording-button]").should("have.length", 1).click();
    cy.wait(1000);
    cy.get("[data-test=shop-recording-button]").should("have.length", 1).click();
    cy.contains("Weiter").click();
    // eslint-disable-next-line no-unused-vars
    cy.get("form").within(($form) => {
      cy.get("textarea").type("Just a test message");
    });
    cy.get("[data-test=send-button]").should("have.length", 1).click();
    cy.contains("Danke für deine Einsendung").should("have.length", 1);
  });
});
