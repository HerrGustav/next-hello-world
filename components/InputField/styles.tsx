import styled from "styled-components";
import { transition } from "../../styles/transitions";

const StyledInput = styled.input<{ error?: boolean }>`
  min-height: 25px;
  min-width: 250px;
  padding: 10px 15px;
  border: 1px solid ${(props) => props.theme.Primary};
  color: ${(props) => props.theme.Primary};
  outline: none;
  border-radius: ${(props) => props.theme.BorderRadius};
  box-shadow: none;
  ${transition(["border-color", "color"])};

  &.error {
    border-color: ${(props) => props.theme.FontColorError};
    color: ${(props) => props.theme.FontColorError};
  }
`;

const StyledInputLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const StyledErrorMessage = styled.span`
  display: block;
  color: ${(props) => props.theme.FontColorError};
  margin-top: 15px;
`;

export { StyledInput, StyledInputLabel, StyledErrorMessage };
