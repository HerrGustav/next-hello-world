import React, { createContext, useContext, useState } from "react";

type LoginState = {
  userName: string;
  loggedIn: boolean;
};

type LoginSetter = React.Dispatch<React.SetStateAction<LoginState>>;

const loginInitialState: LoginState = {
  userName: "",
  loggedIn: false,
};

const LoginContext = createContext<[login: LoginState, setLogin: LoginSetter]>([
  loginInitialState,
  () => {},
]);

const useLogin = (): [LoginState, LoginSetter] => {
  const [login, setLogin] = useContext(LoginContext);
  if (!login || !setLogin) {
    console.error("useLogin can only be used inside a React component!");
  }

  return [login, setLogin];
};

const useIsLoggedIn = (): boolean => {
  const [login] = useContext(LoginContext);
  if (!login) {
    console.error("useIsLoggedIn can only be used inside a React component!");
  }

  return login.loggedIn;
};

const useUserName = (): string => {
  const [login] = useContext(LoginContext);
  if (!login) {
    console.error("useUserName can only be used inside a React component!");
  }

  return login.userName;
};

const Login = (props: { children: React.ReactNode }): JSX.Element => {
  const [login, setLogin] = useState<LoginState>(loginInitialState);
  return (
    <LoginContext.Provider value={[login, setLogin]}>
      {props.children}
    </LoginContext.Provider>
  );
};

export { Login, useIsLoggedIn, useUserName, useLogin };
