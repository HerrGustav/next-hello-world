import React, { useState } from "react";
import { Button } from "../../components";
import { InputField } from "../../components/InputField";
import { config } from "../../config";
import { useLogin } from "../../contexts/LoginContext";
import { validateEmail } from "./email";
import { LoginError, parseError } from "./error";
import {
  StyledErrorMessage,
  StyledInputWrapper,
  StyledSection,
} from "./styles";

type LoginResponseBody = {
  authorized: boolean;
  userName: string;
};

type LoginState = {
  error: LoginError | null;
  email: string;
  emailIsValid: boolean | null;
  password: string;
  submitted: boolean;
};

const initialState: LoginState = {
  error: null,
  email: "",
  emailIsValid: null,
  password: "",
  submitted: false,
};

const LoginMask: React.FC = (): JSX.Element => {
  const [state, setState] = useState<LoginState>(initialState);
  const [, setLogin] = useLogin();

  // checkEmail is only a first check that a given email has the correct format
  // it can't replace a server side check, though:
  const checkEmail = () => {
    if (state.email.length === 0) {
      // if the email field had a reset, we should not show an error message
      setState({ ...state, emailIsValid: null });
      return;
    }

    setState({ ...state, emailIsValid: validateEmail(state.email) });
  };

  const submittable = (): boolean => {
    if (state.submitted || !state.emailIsValid) {
      return false;
    }

    return state.email.length > 0 && state.password.length > 0;
  };

  const submit = (): void => {
    const { email, password } = state;
    setState({ ...state, submitted: true, error: null });

    fetch(config.login.url, {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }).then((res) => {
      // validate responses:
      if (res.status !== config.login.successCode || !res.body) {
        setState({
          ...state,
          error: parseError(res.status),
          submitted: false,
        });
        return;
      }

      // if all good, set the login state to the global context:
      res
        .json()
        .catch(() => setState({ ...state, error: parseError(500) }))
        .then((b: LoginResponseBody) =>
          setLogin({ loggedIn: b.authorized, userName: b.userName })
        );
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter") {
      submit();
    }
  };

  return (
    <StyledSection onKeyDown={handleKeyDown} data-qa="login-mask">
      <StyledInputWrapper>
        <InputField
          dataQA="login-mask--field-email"
          label="Email:"
          type="email"
          placeholder="Email"
          error={state.emailIsValid === false}
          errorLabel="Please use a valid email address"
          onChange={(email) => setState({ ...state, email })}
          onBlur={checkEmail}
        />
      </StyledInputWrapper>
      <StyledInputWrapper marginTop={15}>
        <InputField
          dataQA="login-mask--field-password"
          label="Password:"
          type="password"
          placeholder="Password"
          onChange={(password) => setState({ ...state, password })}
        />
      </StyledInputWrapper>
      <Button
        data-qa="login-mask--submit"
        disabled={!submittable()}
        onClick={submit}
      >
        {state.submitted ? "Please wait..." : "Submit"}
      </Button>
      {state.error && (
        <StyledErrorMessage data-qa="login-mask--error">
          {state.error?.message}
        </StyledErrorMessage>
      )}
    </StyledSection>
  );
};

export { LoginMask };
