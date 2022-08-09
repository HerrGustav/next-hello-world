import { css } from "styled-components";

// baseFontSize is 16px for most browsers;
// ref.: https://developer.mozilla.org/en-US/docs/Web/CSS/font-size#rems
const baseFontSize = 16;

const pxToRem = (pxValue: number): number => pxValue / baseFontSize;

// fontSize returns the font size of a given input in pixel as rem value.
// This makes it easier to translate the figma design to the actual styling code.
const fontSize = (pxValue: number) =>
  css`
    font-size: ${pxToRem(pxValue)}rem;
  `;

export { fontSize };
