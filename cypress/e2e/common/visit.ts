const baseURL = "http://localhost:3000";

enum Routes {
  Home = "/",
}

const visit = (
  route = Routes.Home,
  options?: Partial<Cypress.VisitOptions>
): void => {
  cy.visit(`${baseURL}${route}`, options);
};

export { Routes, visit };
