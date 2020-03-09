/* eslint-disable-next-line spaced-comment */
/// <reference types="Cypress" />
import { newUser } from "../Helper";

describe("Register a new user", () => {
  it("should render registration page on button click", () => {
    cy.visit("/");
    cy.get("button").contains("Registrieren").click();
    cy.url().should("include", "sign_up");
  });

  it("should create a new user", () => {
    cy.visit("/sign_up");
    cy.get('input[name="firstName"]').type(newUser.firstName);
    cy.get('input[name="lastName"]').type(newUser.lastName);
    cy.get('input[name="email"]').type(newUser.email);
    cy.get('input[name="password"]').type(newUser.password);
    cy.get('button[type="submit"]').contains("Registrieren").click();
    cy.contains(`Hallo ${newUser.firstName} ${newUser.lastName}`);
  });
});
