/* eslint-disable-next-line */
/// <reference types="Cypress" />

const newUser = {
  firstName: "Max",
  lastName: "Mustermann",
  email: `max@test${Math.random() * 10000 + 1}.de`,
  password: "secret",
};

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

describe("Sign in through navbar button", () => {
  it("should render sign in page on button click", () => {
    cy.visit("/");
    cy.get("button").contains("Anmelden").click();
    cy.url().should("include", "sign_in");
  });

  it("should create a new user on", () => {
    cy.visit("/sign_in/");
    cy.get('input[type="email"]').type(newUser.email);
    cy.get('input[type="password"]').type(newUser.password);
    cy.get('button[type="submit"]').contains("Anmelden").click();
    cy.contains(`Hallo ${newUser.firstName} ${newUser.lastName}`);
  });
});
