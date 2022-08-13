import styled from "styled-components";
import { Button } from "../../components";
import { blockCenterRelative } from "../../styles/positions";

const StyledSection = styled.section`
  ${blockCenterRelative};
  max-width: 620px;
  min-width: 250px;

  ${Button} {
    ${blockCenterRelative};
    margin-top: 25px;
    min-width: 250px;
  }
`;

const StyledInputWrapper = styled.div<{ marginTop?: number }>`
  ${blockCenterRelative};
  margin-top: ${(props) => props.marginTop}px;
`;

export { StyledSection, StyledInputWrapper };
