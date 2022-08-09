const interceptBackendCall = (
  response?: { [key: string]: string | null },
  delay: number = 0
) =>
  cy
    .intercept(
      {
        method: "GET",
        url: "/api/hello-data",
        hostname: "localhost",
      },
      {
        body: response,
        delay,
      }
    )
    .as("interceptBackendCall");

export { interceptBackendCall };
