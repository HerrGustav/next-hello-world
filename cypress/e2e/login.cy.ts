/// <reference types="cypress" />
import { interceptLogin } from "./common/api";
import { Routes, visit } from "./common/visit";

export enum LoginElements {
  Email = `[data-qa="login-mask--field-email"]`,
  EmailErrorMessage = `[data-qa="login-mask--field-email--error-message"]`,
  Error = `[data-qa="login-mask--error"]`,
  Password = `[data-qa="login-mask--field-password"]`,
  Submit = `[data-qa="login-mask--submit"]`,
}

const resetLoginForm = () => {
  cy.get(LoginElements.Email).clear();
  cy.get(LoginElements.Password).clear();
};

describe("Login Mask", () => {
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

describe("Login Flow", () => {
  before(() => visit(Routes.Home));

  it("A login success will redirect to the welcome page", () => {
    cy.get(LoginElements.Email).type("test@test.com").blur();
    cy.get(LoginElements.Password).type("mock");

    // stub actual request:
    interceptLogin({ authorized: true, userName: "Test User" }, 200);
    cy.get(LoginElements.Submit).click();
    cy.wait("@interceptLogin");

    cy.get(LoginElements.Error).should("not.exist");
    cy.url().should("contain", "/welcome");
  });
});
