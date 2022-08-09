import { css, Keyframes, keyframes } from "styled-components";
import { TransitionAnimationCurve, TransitionAnimationTiming } from "./global";

const fadeUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(5vh);
    }

    to {
        opacity: 1;
        transform: translateY(0vh);
    }
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

const animate = (
  animation: Keyframes,
  duration: number = TransitionAnimationTiming,
  curve: string = TransitionAnimationCurve,
  delay: number = 0,
  direction: string = "forwards"
) => {
  return css`
    animation: ${animation};
    animation-direction: ${direction};
    animation-duration: ${duration}s;
    animation-timing-function: ${curve};
    animation-delay: ${delay};
  `;
};

export { fadeUp, fadeIn, animate };
