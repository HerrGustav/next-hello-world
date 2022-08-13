/// <reference types="cypress" />
import { Routes, visit } from "../common/visit";

enum PageElements {
  ThemeToggle = `[data-qa="theme-toggle"]`,
  Title = `[data-qa="title"]`,
  Loader = `[data-qa="loader"]`,
  LoginMask = `[data-qa="login-mask"]`,
  LoginMaskEmail = `[data-qa="login-mask--field-email"]`,
  LoginMaskPassword = `[data-qa="login-mask--field-password"]`,
  LoginMaskSubmit = `[data-qa="login-mask--submit"]`,
  FetchedData = `[data-qa="fetched-data"]`,
  NoData = `[data-qa="no-data"]`,
}

// describe("Home:", () => {
//   before(() => visit(Routes.Home));

//   it("Title exists and is visible", () =>
//     cy.get(PageElements.Title).should("be.visible"));

//   it("Theme toggle exists and is visible", () =>
//     cy.get(PageElements.ThemeToggle).should("be.visible"));

//   it("Login Mask exists and is visible", () =>
//     cy.get(PageElements.LoginMask).should("be.visible"));
// });

describe("Login", () => {
  before(() => visit(Routes.Home));

  it("Email field is visible", () => {
    cy.get(PageElements.LoginMaskEmail)
      .should("be.visible")
      .should("have.attr", "type", "email");
  });

  it("Password field is visible", () => {
    cy.get(PageElements.LoginMaskPassword)
      .should("be.visible")
      .should("have.attr", "type", "password");
  });

  it("Submit button is visible and disabled by default", () => {
    cy.get(PageElements.LoginMaskSubmit)
      .should("be.visible")
      .should("be.disabled");
  });
});
