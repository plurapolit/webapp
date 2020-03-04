/* eslint-disable-next-line */
/// <reference types="Cypress" />
import { expectPlayingAudio, pageUrl } from "../Helper";

describe("PlayStatement", () => {
  it("should find a PanelCard on Homepage", () => {
    cy.visit("/");
    cy.get("[data-test=CategoryBanner]");
    cy.get("[data-test=PanelCard]");
    cy.get(`[href="${pageUrl}"]`).click();
    cy.url().should("include", pageUrl);
  });

  it("should render Statements on Panel page", () => {
    cy.visit(pageUrl);
    cy.get("[data-test=Statement]").should("have.length", 5);
  });

  it("should play a Statement on click", () => {
    cy.visit(pageUrl);
    // eslint-disable-next-line no-unused-vars
    cy.get("[data-test=Statement]").first().within(($Statement) => {
      cy.get("[data-test=PlayButton]").click();
    });
    expectPlayingAudio();
  });
});
