const interceptHelloData = (
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
    .as("interceptHelloData");

const interceptLogin = (
  response?: { [key: string]: string | number | boolean | null },
  code?: number,
  delay: number = 0
) =>
  cy
    .intercept(
      {
        method: "POST",
        url: "http://localhost:3000/api/login",
        hostname: "localhost",
      },
      {
        body: response,
        statusCode: code,
        delay,
      }
    )
    .as("interceptLogin");

export { interceptHelloData, interceptLogin };
