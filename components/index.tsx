import styled, { ThemeProps } from "styled-components";
import { onStartUpFadeIn } from "../styles/animations";
import { fontSize } from "../styles/fonts";
import { blockCenterRelative } from "../styles/positions";
import { Theme } from "../styles/theme/themes";
import { transition } from "../styles/transitions";

const PageMain = styled.main<ThemeProps<Theme>>`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15vh;
`;

const PageContainer = styled.div<ThemeProps<Theme>>`
  ${blockCenterRelative};
  background: ${(props) => props.theme.Secondary};
  height: 100%;
  min-height: 100vh;
  padding: 0 25px;
  ${transition("background")};

  ${PageMain} {
    ${onStartUpFadeIn};
  }
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
  ${transition(["opacity"])};

  &:hover:not(:disabled) {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.4;
  }
`;

const Text = styled.p`
  ${fontSize(18)};
  font-weight: normal;
  text-align: center;
`;

export { PageContainer, PageMain, Title, Button, Text };
