import React, { useState } from "react";
import { Button } from "../../components";
import { InputField } from "../../components/InputField";
import { config } from "../../config";
import {
  StyledErrorMessage,
  StyledInputWrapper,
  StyledSection,
} from "./styles";

type LoginError = { type: "unauthorized" | "other"; message: string };
const unauthorizedError: LoginError = {
  type: "unauthorized",
  message: "Either your given email or your password are incorrect.",
};
const otherError: LoginError = {
  type: "other",
  message: "Something went wrong. Please try later again.",
};

const validateEmail = (input: string): boolean => {
  if (!input || input.length == 0) {
    return false;
  }

  const rgx = new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  return rgx.test(input);
};

const LoginMask: React.FC = (): JSX.Element => {
  const [error, setError] = useState<LoginError | null>(null);
  const [email, setEmail] = useState<string>("");
  const [emailIsValid, setEmailIsValid] = useState<boolean | null>(null);
  const [password, setPassword] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  // checkEmail is only a first check that a given email has the correct format
  // it can't replace a server side check, though:
  const checkEmail = () => {
    if (email.length === 0) {
      // if the email field is rest, we should not show an error message
      setEmailIsValid(null);
      return;
    }

    return setEmailIsValid(validateEmail(email));
  };

  const submittable = (): boolean => {
    if (submitted || !emailIsValid) {
      return false;
    }

    return email.length > 0 && password.length > 0;
  };

  const submit = (): void => {
    setSubmitted(true);
    setError(null);
    fetch(config.login, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => {
      if (res.status !== config.successCode) {
        setError(
          res.status === config.unauthorizedCode
            ? unauthorizedError
            : otherError
        );
        setSubmitted(false);
        return;
      }
    });
  };

  return (
    <StyledSection data-qa="login-mask">
      <StyledInputWrapper>
        <InputField
          dataQA="login-mask--field-email"
          label="Email:"
          type="email"
          placeholder="Email"
          error={emailIsValid === false}
          errorLabel="Please use a valid email address"
          onChange={setEmail}
          onBlur={checkEmail}
        />
      </StyledInputWrapper>
      <StyledInputWrapper marginTop={15}>
        <InputField
          dataQA="login-mask--field-password"
          label="Password:"
          type="password"
          placeholder="Password"
          onChange={setPassword}
        />
      </StyledInputWrapper>
      <Button
        data-qa="login-mask--submit"
        disabled={!submittable()}
        onClick={submit}
      >
        {submitted ? "Please wait..." : "Submit"}
      </Button>
      {error && (
        <StyledErrorMessage data-qa="login-mask--error">
          {error?.message}
        </StyledErrorMessage>
      )}
    </StyledSection>
  );
};

export { LoginMask };
