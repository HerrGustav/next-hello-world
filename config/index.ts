enum Routes {
  Home = "/",
  Welcome = "/welcome",
}

type AppConfig = {
  login: {
    url: string;
    successCode: number;
    unauthorizedCode: number;
  };
};

const config: AppConfig = {
  login: {
    url: "/api/login",
    successCode: 200,
    unauthorizedCode: 401,
  },
};

export { config, Routes };
