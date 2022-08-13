import styled from "styled-components";

const StyledInput = styled.input`
  min-height: 25px;
  min-width: 250px;
  padding: 10px 15px;
  border: 1px solid ${(props) => props.theme.Primary};
  color: ${(props) => props.theme.Primary};
  outline: none;
  border-radius: ${(props) => props.theme.BorderRadius};
  box-shadow: none;
`;

const StyledInputLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export { StyledInput, StyledInputLabel };
