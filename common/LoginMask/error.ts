import { config } from "../../config";

type LoginError = { type: "unauthorized" | "other"; message: string };

const unauthorizedError: LoginError = {
  type: "unauthorized",
  message: "Either your given email or your password are incorrect.",
};

const otherError: LoginError = {
  type: "other",
  message: "Something went wrong. Please try later again.",
};

const parseError = (status: number): LoginError => {
  if (status === config.login.unauthorizedCode) {
    return unauthorizedError;
  }

  return otherError;
};

export type { LoginError };
export { parseError };
