/* eslint-disable-next-line spaced-comment */
/// <reference types="Cypress" />
import { expectPlayingAudio, pageUrl } from "../Helper";

describe("PlayStatement", () => {
  it("should find a PanelCard on Homepage", () => {
    cy.visit("/");
    cy.get("[data-test=category-banner]");
    cy.get("[data-test=panel-card]");
    cy.get(`[href="${pageUrl}"]`).click();
    cy.url().should("include", pageUrl);
  });

  it("should render Statements on Panel page", () => {
    cy.visit(pageUrl);
    cy.get("[data-test=statement]").should("have.length", 5);
  });

  it("should play a Statement on click", () => {
    cy.visit(pageUrl);
    // eslint-disable-next-line no-unused-vars
    cy.get("[data-test=statement]").first().within(($Statement) => {
      cy.get("[data-test=play-button]").click();
    });
    expectPlayingAudio();
  });
});
