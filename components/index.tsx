import styled, { ThemeProps } from "styled-components";
import { animate, fadeIn } from "../styles/animations";
import { fontSize } from "../styles/fonts";
import { TransitionAnimationTiming } from "../styles/global";
import { Theme } from "../styles/theme/themes";
import { transition } from "../styles/transitions";

const PageContainer = styled.div<ThemeProps<Theme>>`
  background: ${(props) => props.theme.Secondary};
  min-height: 100vh;
  padding: 0 2rem;
  ${transition("background")};
  ${animate(fadeIn, TransitionAnimationTiming * 3)};
`;

const PageMain = styled.main<ThemeProps<Theme>>`
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1<ThemeProps<Theme>>`
  color: ${(props) => props.theme.Primary};
  ${fontSize(30)};
  ${transition("color")};
`;

const Button = styled.button<ThemeProps<Theme>>`
  min-height: 25px;
  padding: 5px 15px;
  background: ${(props) => props.theme.Primary};
  color: ${(props) => props.theme.FontColor};
  border-radius: ${(props) => props.theme.BorderRadius};
  ${fontSize(18)};
  font-weight: normal;
  box-shadow: none;
  border: 2px solid ${(props) => props.theme.Primary};
  cursor: pointer;
  ${transition(["color", "background"])};

  &:hover {
    background: ${(props) => props.theme.Secondary};
    color: ${(props) => props.theme.Primary};
  }
`;

const Text = styled.p`
  ${fontSize(18)};
  font-weight: normal;
  text-align: center;
`;

export { PageContainer, PageMain, Title, Button, Text };
