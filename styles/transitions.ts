import { css } from "styled-components";
import { TransitionAnimationCurve, TransitionAnimationTiming } from "./global";

// @TODO add a jest test:
const transition = (
  properties: string | string[],
  duration: number = TransitionAnimationTiming,
  curve: string = TransitionAnimationCurve,
  delay: number = 0
) => {
  const props =
    typeof properties === "string" ? properties : properties.join(", ");
  return css`
    transition: ${props} ${duration}s ${curve} ${delay}s;
  `;
};

export { transition };
