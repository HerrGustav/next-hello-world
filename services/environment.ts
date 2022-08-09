enum Environment {
  Development = "DEV",
  Testing = "TEST",
  Production = "PROD",
}

const retrieveEnvironment = (): Environment => {
  // Should normally match the type NodeJS.ProcessEnv.NODE_ENV
  // which has the values: "development" | "production" | "test".
  // We declare it as string/undefined to deal with potential other cases.
  const env: string | undefined = process.env.NODE_ENV;

  switch (env) {
    case "development":
      return Environment.Development;
    case "production":
      return Environment.Production;
    case "test":
      return Environment.Testing;
    default:
      // @TODO put a logger here:
      console.error(
        "failed to parse environment flag, was: ",
        env,
        ", will set prod as fallback."
      );
      return Environment.Production;
  }
};

const isProduction = () => retrieveEnvironment() === Environment.Production;

export { Environment, retrieveEnvironment, isProduction };
