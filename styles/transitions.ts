import { css } from "styled-components";
import { TransitionAnimationCurve, TransitionAnimationTiming } from "./global";

/**
 *
 * @param properties string | string[]
 * @param duration number
 * @param curve string
 * @param delay number
 * @desc transition is creating a transition for one or multiple properties.
 * If multiple properties are given, it will apply the same duration, curve and delay for them.
 * @TODO add a jest test ref.: https://github.com/HerrGustav/next-hello-world/issues/4
 * @returns Css Properties
 */
const transition = (
  properties: string | string[],
  duration: number = TransitionAnimationTiming,
  curve: string = TransitionAnimationCurve,
  delay: number = 0
) => {
  if (typeof properties === "string") {
    return css`
      transition: ${properties} ${duration}s ${curve} ${delay}s;
    `;
  }

  return css`
    transition: ${properties.join(", ")};
    transition-duration: ${duration}s;
    transition-timing-function: ${curve};
    transition-delay: ${delay}s;
  `;
};

export { transition };
