/* eslint-disable-next-line spaced-comment */
/// <reference types="Cypress" />
import { expectPlayingAudio, pageUrl } from "../Helper";

describe("PlayComment", () => {
  it("should render Comments on Panel page", () => {
    cy.visit(pageUrl);
    cy.get("[data-test=comment]");
  });

  it("should play a Comment on click", () => {
    cy.visit(pageUrl);
    // eslint-disable-next-line no-unused-vars
    cy.get("[data-test=comment]").first().within(($Comment) => {
      cy.get("[data-test=play-button]").click();
    });
    expectPlayingAudio();
  });
});
