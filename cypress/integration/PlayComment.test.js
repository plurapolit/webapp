/* eslint-disable-next-line */
/// <reference types="Cypress" />
import { expectPlayingAudio, pageUrl } from "../Helper";

describe("PlayComment", () => {
  it("should render Comments on Panel page", () => {
    cy.visit(pageUrl);
    cy.get("[data-test=Comment]");
  });

  it("should play a Comment on click", () => {
    cy.visit(pageUrl);
    // eslint-disable-next-line no-unused-vars
    cy.get("[data-test=Comment]").first().within(($Comment) => {
      cy.get("[data-test=PlayButton]").click();
    });
    expectPlayingAudio();
  });
});
