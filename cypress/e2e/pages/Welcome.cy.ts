/// <reference types="cypress" />
import { interceptLogin } from "../common/api";
import { Routes, visit } from "../common/visit";
import { LoginElements } from "../login.cy";

enum PageElements {
  ThemeToggle = `[data-qa="theme-toggle"]`,
  Title = `[data-qa="title"]`,
  Loader = `[data-qa="loader"]`,
  VideoPlayer = `[data-qa="video-player"]`,
  VideoPlayerJump = `[data-qa="video-player--jump-mark"]`,
}

const loginToPageAndWaitForRedirect = () => {
  visit(Routes.Home);
  cy.get(LoginElements.Email).type("test@test.com").blur();
  cy.get(LoginElements.Password).type("mock");

  // stub actual request:
  interceptLogin({ authorized: true, userName: "Test User" }, 200);
  cy.get(LoginElements.Submit).click();
  cy.wait("@interceptLogin");

  cy.get(LoginElements.Error).should("not.exist");
  cy.url().should("contain", "/welcome");
};

describe("Welcome:", () => {
  before(() => loginToPageAndWaitForRedirect());

  it("Title exists and is visible", () =>
    cy.get(PageElements.Title).should("be.visible"));

  it("Theme toggle exists and is visible", () =>
    cy.get(PageElements.ThemeToggle).should("be.visible"));

  it("Video player exists and is visible", () =>
    cy.get(PageElements.VideoPlayer).should("be.visible"));

  it("Jump mark button exists and is visible", () =>
    cy.get(PageElements.VideoPlayerJump).should("be.visible"));
});

describe("Video player", () => {
  beforeEach(() => loginToPageAndWaitForRedirect());
  it("Plays and stops the video accordingly", () => {
    cy.get(PageElements.VideoPlayer)
      .should("have.prop", "paused", true)
      .and("have.prop", "ended", false)
      .then(($video) => {
        const player = $video[0] as HTMLVideoElement;
        player.play();
        cy.wrap($video)
          .should("have.prop", "paused", false)
          .and("have.prop", "ended", false);

        // wait until the player is starting playing to
        // stop it again:
        player.onplaying = () => {
          player.pause();
          cy.wrap($video)
            .should("have.prop", "paused", true)
            .and("have.prop", "ended", false);
        };
      });
  });

  it("Video jumps in idle mode to specific moment in time via button click", () => {
    cy.get(PageElements.VideoPlayerJump).click();
    cy.get(PageElements.VideoPlayer).then(($video) => {
      const player = $video[0] as HTMLVideoElement;
      expect(player.currentTime).eq(22);
    });
  });

  it("Video jumps in play mode to specific moment in time via button click", () => {
    cy.get(PageElements.VideoPlayer).then(($video) => {
      const player = $video[0] as HTMLVideoElement;
      player.play();

      cy.get(PageElements.VideoPlayerJump)
        .click()
        .then(() => {
          cy.get(PageElements.VideoPlayer).then(($v) => {
            const player = $v[0] as HTMLVideoElement;
            expect(player.currentTime).gte(22);
          });
        });
    });
  });
});
