import styled, { ThemeProps } from "styled-components";
import { transition } from "../../styles/transitions";
import { Theme } from "../../styles/theme/themes";
import { onStartUpFadeIn } from "../../styles/animations";

const Button = styled.button<ThemeProps<Theme>>`
  display: block;
  min-height: 25px;
  height: 58px;
  width: 65px;
  background: ${(props) => props.theme.Primary};
  color: ${(props) => props.theme.FontColor};
  border-radius: ${(props) => props.theme.BorderRadius};
  box-shadow: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  ${transition("background")};
  ${onStartUpFadeIn};

  .icon,
  .icon path {
    display: block;
    height: 100%;
    width: auto;
    margin: 0;
    fill: ${(props) => props.theme.FontColor};
  }
`;

const Wrapper = styled.div<ThemeProps<Theme>>`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Button, Wrapper };
