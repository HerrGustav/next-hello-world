import { interceptHelloData } from "./common/api";

enum PageElements {
  FetchData = `[data-qa="fetch-data"]`,
}

/**
 * In case, this is put on another page, we keep the tests:
 */

// describe("Data fetching", () => {
//   before(() => visit(Routes.Home));

//   it("Fetches data on button click", () => {
//     interceptHelloData({ msg: "Test Data" }, 2000);
//     cy.get(PageElements.FetchData).click();
//     cy.get(PageElements.Loader).should("be.visible");
//     cy.wait("@interceptHelloData");
//     cy.get(PageElements.FetchedData).should("be.visible");
//   });

//   it("No data available on backend", () => {
//     interceptHelloData({ msg: null }, 2000);
//     cy.get(PageElements.FetchData).click();
//     cy.get(PageElements.Loader).should("be.visible");
//     cy.wait("@interceptHelloData");
//     cy.get(PageElements.NoData).should("be.visible");
//   });

//   // @TODO add tests for failed requests
//   // tracked here ref.: https://github.com/HerrGustav/next-hello-world/issues/2
// });
