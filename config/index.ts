type AppConfig = {
  login: string;
  successCode: number;
  unauthorizedCode: number;
};

const config: AppConfig = {
  login: "/api/login",
  successCode: 200,
  unauthorizedCode: 401,
};

export { config };
