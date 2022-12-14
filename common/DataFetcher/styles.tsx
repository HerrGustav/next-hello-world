import styled from "styled-components";
import { animate, fadeUp } from "../../styles/animations";
import {
  TransitionAnimationCurve,
  TransitionAnimationTiming,
} from "../../styles/global";
import { blockCenterRelative } from "../../styles/positions";

const Section = styled.section`
  ${blockCenterRelative};
  width: 100%;

  button {
    ${blockCenterRelative}
    ${animate(
      fadeUp,
      TransitionAnimationTiming * 1.2,
      TransitionAnimationCurve,
      TransitionAnimationTiming * 1.5,
      "both"
    )};
  }
`;

const ContentBox = styled.div`
  display: block;
  margin: 0 auto;
  margin-top: 25px;
  width: 100%;
  max-width: 620px;
  padding: 25px 15px;
  border: 2px solid ${(props) => props.theme.Primary};
  border-radius: ${(props) => props.theme.BorderRadius};
  ${animate(fadeUp)};
`;

export { Section, ContentBox };
