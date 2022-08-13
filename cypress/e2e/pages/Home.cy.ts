/// <reference types="cypress" />
import { Routes, visit } from "../common/visit";

enum PageElements {
  ThemeToggle = `[data-qa="theme-toggle"]`,
  Title = `[data-qa="title"]`,
  Loader = `[data-qa="loader"]`,
  LoginMask = `[data-qa="login-mask"]`,
  FetchedData = `[data-qa="fetched-data"]`,
  NoData = `[data-qa="no-data"]`,
}

describe("Home:", () => {
  before(() => visit(Routes.Home));

  it("Title exists and is visible", () =>
    cy.get(PageElements.Title).should("be.visible"));

  it("Theme toggle exists and is visible", () =>
    cy.get(PageElements.ThemeToggle).should("be.visible"));

  it("Login Mask exists and is visible", () =>
    cy.get(PageElements.LoginMask).should("be.visible"));
});
