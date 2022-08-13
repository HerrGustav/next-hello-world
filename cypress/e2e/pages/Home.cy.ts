/// <reference types="cypress" />
import { interceptLogin } from "../common/api";
import { Routes, visit } from "../common/visit";

enum PageElements {
  ThemeToggle = `[data-qa="theme-toggle"]`,
  Title = `[data-qa="title"]`,
  Loader = `[data-qa="loader"]`,
  LoginMask = `[data-qa="login-mask"]`,
  FetchedData = `[data-qa="fetched-data"]`,
  NoData = `[data-qa="no-data"]`,
}

enum LoginElements {
  Email = `[data-qa="login-mask--field-email"]`,
  EmailErrorMessage = `[data-qa="login-mask--field-email--error-message"]`,
  Error = `[data-qa="login-mask--error"]`,
  Password = `[data-qa="login-mask--field-password"]`,
  Submit = `[data-qa="login-mask--submit"]`,
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

const resetLoginForm = () => {
  cy.get(LoginElements.Email).clear();
  cy.get(LoginElements.Password).clear();
};

describe("Login", () => {
  before(() => visit(Routes.Home));
  // make sure we always clean up before the next test run:
  afterEach(() => resetLoginForm());

  it("Email field is visible", () => {
    cy.get(LoginElements.Email)
      .should("be.visible")
      .should("have.attr", "type", "email");
  });

  it("Password field is visible", () => {
    cy.get(LoginElements.Password)
      .should("be.visible")
      .should("have.attr", "type", "password");
  });

  it("Submit button is visible and disabled by default", () => {
    cy.get(LoginElements.Submit).should("be.visible").should("be.disabled");
  });

  it("Invalid Email input shows error message", () => {
    cy.get(LoginElements.Email).type("test").blur();
    cy.get(LoginElements.EmailErrorMessage).should("be.visible");
  });

  it("Valid Email input shows no error message", () => {
    cy.get(LoginElements.Email).type("test@test.com").blur();
    cy.get(LoginElements.EmailErrorMessage).should("not.exist");
  });

  it("Submit button becomes active if email and password are given", () => {
    cy.get(LoginElements.Submit).should("be.disabled");
    cy.get(LoginElements.Email).type("test@test.com").blur();
    cy.get(LoginElements.Password).type("mock");
    cy.get(LoginElements.Submit).should("not.be.disabled");
  });

  it("A failed login shows an error message", () => {
    cy.get(LoginElements.Email).type("test@test.com").blur();
    cy.get(LoginElements.Password).type("mock");

    // stub actual request:
    interceptLogin({ code: 401, message: "unauthorized" }, 401);
    cy.get(LoginElements.Submit).click();
    cy.wait("@interceptLogin");

    cy.get(LoginElements.Error).should("be.visible");
    cy.get(LoginElements.Submit).should("not.be.disabled");
  });
});
