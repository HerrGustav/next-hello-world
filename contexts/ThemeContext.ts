import { createContext, useContext } from "react";

enum Themes {
  DarkMode = "dark",
  LightMode = "light",
}

type ThemeSetter = React.Dispatch<React.SetStateAction<Themes>>;

const ThemeContext = createContext<[theme: Themes, setTheme: ThemeSetter]>([
  Themes.LightMode,
  () => {},
]);

const useTheme = (): [Themes, ThemeSetter] => {
  const [theme, setTheme] = useContext(ThemeContext);
  if (!theme || !setTheme) {
    console.error("useTheme can only be used inside a React component!");
  }
  return [theme, setTheme];
};

export { Themes, ThemeContext, useTheme };
