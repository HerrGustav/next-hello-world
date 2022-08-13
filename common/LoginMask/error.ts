type LoginError = { type: "unauthorized" | "other"; message: string };

const unauthorizedError: LoginError = {
  type: "unauthorized",
  message: "Either your given email or your password are incorrect.",
};

const otherError: LoginError = {
  type: "other",
  message: "Something went wrong. Please try later again.",
};

export type { LoginError };
export { unauthorizedError, otherError };
