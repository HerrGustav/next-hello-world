import React, { useState } from "react";
import { Button } from "../../components";
import { InputField } from "../../components/InputField";
import { StyledInputWrapper, StyledSection } from "./styles";

const LoginMask: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const submittable = (): boolean => {
    return email.length > 0 && password.length > 0;
  };
  return (
    <StyledSection data-qa="login-mask">
      <StyledInputWrapper>
        <InputField
          dataQA="login-mask--field-email"
          label="Email:"
          type="email"
          placeholder="Email"
          onChange={setEmail}
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
      <Button data-qa="login-mask--submit" disabled={!submittable()}>
        Submit
      </Button>
    </StyledSection>
  );
};

export { LoginMask };
