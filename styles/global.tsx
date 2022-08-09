import { createGlobalStyle, ThemeProps } from "styled-components";
import { Theme } from "./theme/themes";

/**
 * Global styling values, that are not theme based:
 */
const TransitionAnimationTiming = 0.6;
const TransitionAnimationCurve = "ease";

const GlobalStyles = createGlobalStyle<ThemeProps<Theme>>`
    :root {
        /* light theme is the default: */
        color-scheme: light;
        color: ${(props) => props.theme.FontColor};

        @media (prefers-color-scheme: dark) {
            color-scheme: dark;
        }
    }

    html {
        font-size: 100%;
    }

    html,
    body {
        padding: 0;
        margin: 0;
        font-family: sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }
`;

export { GlobalStyles, TransitionAnimationTiming, TransitionAnimationCurve };
