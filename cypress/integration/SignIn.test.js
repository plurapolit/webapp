/* eslint-disable-next-line spaced-comment */
/// <reference types="Cypress" />
import { user } from "../Helper";

describe("Sign in through navbar button", () => {
  it("should render sign in page on button click", () => {
    cy.visit("/");
    cy.get("button").contains("Anmelden").click();
    cy.url().should("include", "sign_in");
  });

  it("should create a new user on", () => {
    cy.visit("/sign_in/");
    cy.get('input[type="email"]').type(user.email);
    cy.get('input[type="password"]').type(user.password);
    cy.get('button[type="submit"]').contains("Anmelden").click();
    cy.contains(`Hallo ${user.firstName} ${user.lastName}`);
  });
});
