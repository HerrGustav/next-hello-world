/*
    Generally test if color scheme switching works as expected:
*/
import { Routes, visit } from "./common/visit";

enum PageElements {
  ThemeToggle = `[data-qa="theme-toggle"]`,
}

enum ColorScheme {
  Dark = "dark",
  Light = "light",
}

const hasColorScheme = (c: ColorScheme): void => {
  cy.get(`[data-qa="color-scheme--${c}"]`);
};

// stub the match media requests, so we can mock it to the desired behavior:
const stubMatchMediaIsDarkMode = (
  c: ColorScheme
): Partial<Cypress.VisitOptions> => ({
  onBeforeLoad(w: Window) {
    cy.stub(w, "matchMedia")
      .withArgs("(prefers-color-scheme: dark)")
      .as("matchMedia")
      .returns({
        matches: c === ColorScheme.Dark,
        addEventListener: () => ({ matches: c === ColorScheme.Dark }),
      });
  },
});

describe("Color Scheme", () => {
  Object.values(ColorScheme).forEach((c: ColorScheme) => {
    it(`shows ${c} theme if set by the system`, () => {
      visit(Routes.Home, stubMatchMediaIsDarkMode(c));
      hasColorScheme(c);
    });
  });

  it("changes the color scheme on button click", () => {
    visit(Routes.Home, stubMatchMediaIsDarkMode(ColorScheme.Light));
    hasColorScheme(ColorScheme.Light);
    cy.get(PageElements.ThemeToggle).click();
    hasColorScheme(ColorScheme.Dark);
    cy.get(PageElements.ThemeToggle).click();
    hasColorScheme(ColorScheme.Light);
  });
});
