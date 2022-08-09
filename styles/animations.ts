import { css, Keyframes, keyframes } from "styled-components";
import { TransitionAnimationCurve, TransitionAnimationTiming } from "./global";

const fadeUp = keyframes`
    from {
        opacity: 0;
        visibility: hidden;
        transform: translateY(5vh);
    }

    to {
        opacity: 1;
        transform: translateY(0vh);
    }
`;

const animate = (
  animation: Keyframes,
  direction: string = "forwards",
  duration: number = TransitionAnimationTiming,
  curve: string = TransitionAnimationCurve,
  delay: number = 0
) => {
  return css`
    animation: ${animation};
    animation-direction: ${direction};
    animation-duration: ${duration}s;
    animation-timing-function: ${curve};
    animation-delay: ${delay};
  `;
};

export { fadeUp, animate };
