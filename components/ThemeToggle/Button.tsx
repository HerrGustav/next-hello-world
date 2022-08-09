import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { Themes } from "../../styles/theme";
import { StyledButton, StyledWrapper } from "./styles";
import IconDarkMode from "../../assets/icons/icon_dark_mode.svg";
import IconLightMode from "../../assets/icons/icon_light_mode.svg";

const ThemeToggle: React.FC = (): JSX.Element => {
  const [theme, setTheme] = useTheme();
  const isDarkMode = theme === Themes.DarkMode;
  const toggleTheme = () =>
    isDarkMode ? setTheme(Themes.LightMode) : setTheme(Themes.DarkMode);

  return (
    <StyledButton data-qa="theme-toggle" onClick={toggleTheme}>
      <StyledWrapper>
        {!isDarkMode ? (
          <IconDarkMode className="icon" />
        ) : (
          <IconLightMode className="icon" />
        )}
      </StyledWrapper>
    </StyledButton>
  );
};

export { ThemeToggle };
