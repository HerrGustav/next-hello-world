import { css, Keyframes, keyframes } from "styled-components";
import { TransitionAnimationCurve, TransitionAnimationTiming } from "./global";

const fadeUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(1.5vh);
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

/**
 *
 * @param animation keyframes (name of the animation)
 * @param duration number (time in seconds)
 * @param curve string (e.g. "ease", "ease-in", etc.)
 * @param delay number (time in seconds)
 * @param fillMode string (e.g, "forwards", "both", etc.)
 * @returns Css Properties
 */
const animate = (
  animation: Keyframes,
  duration: number = TransitionAnimationTiming,
  curve: string = TransitionAnimationCurve,
  delay: number = 0,
  fillMode: string = "forwards"
) => {
  return css`
    animation: ${animation};
    animation-duration: ${duration}s;
    animation-timing-function: ${curve};
    animation-delay: ${delay}s;
    animation-fill-mode: ${fillMode};
  `;
};

const onStartUpFadeIn = animate(
  fadeIn,
  TransitionAnimationTiming * 3,
  TransitionAnimationCurve,
  0,
  "both"
);

export { fadeUp, fadeIn, animate, onStartUpFadeIn };
