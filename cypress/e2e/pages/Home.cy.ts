import {
  interceptBackendCall,
  interceptBackendCallWithFailure,
} from "../common/api";
import { Routes, visit } from "../common/visit";

enum PageElements {
  ThemeToggle = `[data-qa="theme-toggle"]`,
  Title = `[data-qa="title"]`,
  FetchData = `[data-qa="fetch-data"]`,
  Loader = `[data-qa="loader"]`,
  FetchedData = `[data-qa="fetched-data"]`,
  NoData = `[data-qa="no-data"]`,
}

describe("Home:", () => {
  before(() => visit(Routes.Home));

  it("Title exists and is visible", () =>
    cy.get(PageElements.Title).should("be.visible"));

  it("Theme toggle exists and is visible", () =>
    cy.get(PageElements.ThemeToggle).should("be.visible"));

  it("Data fetch button exists and is visible", () =>
    cy.get(PageElements.FetchData).should("be.visible"));
});

describe("Home - Data fetching", () => {
  before(() => visit(Routes.Home));

  it("Fetches data on button click", () => {
    interceptBackendCall({ msg: "Test Data" }, 2000);
    cy.get(PageElements.FetchData).click();
    cy.get(PageElements.Loader).should("be.visible");
    cy.wait("@interceptBackendCall");
    cy.get(PageElements.FetchedData).should("be.visible");
  });

  it("No data available on backend", () => {
    interceptBackendCall({ msg: null }, 2000);
    cy.get(PageElements.FetchData).click();
    cy.get(PageElements.Loader).should("be.visible");
    cy.wait("@interceptBackendCall");
    cy.get(PageElements.NoData).should("be.visible");
  });

  // @TODO add tests for failed requests
  // tracked here ref.: https://github.com/HerrGustav/hello-world/issues/2
});
