import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext, Themes } from "../../contexts/ThemeContext";
import { isProduction } from "../../services/environment";
import { getTheme } from "./themes";

const matchDarkMode = (): MediaQueryList =>
  window.matchMedia("(prefers-color-scheme: dark)");

const Theming = (props: { children: React.ReactNode }): JSX.Element => {
  const [currentTheme, setCurrentTheme] = useState<Themes>(Themes.LightMode);
  const setCurrentMatch = (isDarkMode: boolean) => {
    setCurrentTheme(isDarkMode ? Themes.DarkMode : Themes.LightMode);
  };

  useEffect(() => {
    // initial check while starting the app:
    const isDarkMode = matchDarkMode();
    setCurrentMatch(isDarkMode.matches);

    // add an event listener if the color scheme preference changes over time:
    isDarkMode.addEventListener("change", (event: MediaQueryListEvent) => {
      setCurrentMatch(event.matches);
    });
  }, []);

  return (
    /* this could be simplified by passing a setter to the styled components theme provider. 
       ref.: https://github.com/HerrGustav/hello-world/issues/1
    */
    <ThemeContext.Provider value={[currentTheme, setCurrentTheme]}>
      <ThemeProvider theme={() => getTheme(currentTheme)}>
        {/* add div to make it testable, but not on prod build: */}
        {!isProduction() && (
          <div hidden data-qa={`color-scheme--${currentTheme}`} />
        )}
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { Themes, Theming };
