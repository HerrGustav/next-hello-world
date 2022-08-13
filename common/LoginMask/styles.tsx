import styled from "styled-components";
import { Button } from "../../components";
import { InputField } from "../../components/InputField";
import {
  StyledInput,
  StyledInputLabel,
} from "../../components/InputField/styles";
import { blockCenterRelative } from "../../styles/positions";

const StyledSection = styled.section`
  ${blockCenterRelative};
  max-width: 620px;
  width: 100%;

  ${Button} {
    ${blockCenterRelative};
    margin-top: 25px;
    min-width: 250px;
  }
`;

const StyledInputWrapper = styled.div<{ marginTop?: number }>`
  ${blockCenterRelative};
  max-width: 250px;
  margin-top: ${(props) => props.marginTop}px;

  ${StyledInput} {
    ${blockCenterRelative};
  }
`;

const StyledErrorMessage = styled.p`
  ${blockCenterRelative};
  color: ${(props) => props.theme.FontColorError};
  border: 1px solid ${(props) => props.theme.FontColorError};
  border-radius: ${(props) => props.theme.BorderRadius};
  padding: 15px;
  text-align: center;
  margin-top: 25px;
`;

export { StyledSection, StyledInputWrapper, StyledErrorMessage };
