import React from "react";
import { StyledErrorMessage, StyledInput, StyledInputLabel } from "./styles";

type InputFieldProps = {
  dataQA?: string;
  label?: string;
  type: "password" | "email";
  placeholder?: string;
  error?: boolean;
  errorLabel?: string;
  onChange: (input: string) => void;
  onBlur?: () => void;
};

const InputField: React.FC<InputFieldProps> = (
  props: InputFieldProps
): JSX.Element => {
  return (
    <React.Fragment>
      {props.label && <StyledInputLabel>{props.label}</StyledInputLabel>}
      <StyledInput
        data-qa={props.dataQA}
        type={props.type}
        placeholder={props.placeholder}
        onBlur={props.onBlur}
        className={`${props.error ? "error" : ""}`}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          props.onChange(event.target.value)
        }
      />
      {props.error && props.errorLabel && (
        <StyledErrorMessage data-qa={`${props.dataQA}--error-message`}>
          {props.errorLabel}
        </StyledErrorMessage>
      )}
    </React.Fragment>
  );
};

export { InputField };
