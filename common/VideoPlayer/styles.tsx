import styled from "styled-components";
import { Button } from "../../components";
import { blockCenterRelative } from "../../styles/positions";

const StyledVideoPlayerWrap = styled.div`
  ${blockCenterRelative};
  height: auto;
  width: 620px;
  max-width: 100%;

  video,
  ${Button} {
    ${blockCenterRelative};
    height: auto;
    max-width: 100%;
  }
`;

export { StyledVideoPlayerWrap };
