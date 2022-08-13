import React from "react";
import { StyledInput, StyledInputLabel } from "./styles";

type InputFieldProps = {
  dataQA?: string;
  label?: string;
  type: "password" | "email";
  placeholder?: string;
  onChange: (input: string) => void;
};

const InputField: React.FC<InputFieldProps> = (
  props: InputFieldProps
): JSX.Element => {
  return (
    <div>
      {props.label && <StyledInputLabel>{props.label}</StyledInputLabel>}
      <StyledInput
        data-qa={props.dataQA}
        type={props.type}
        placeholder={props.placeholder}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          props.onChange(event.target.value)
        }
      />
    </div>
  );
};

export { InputField };
