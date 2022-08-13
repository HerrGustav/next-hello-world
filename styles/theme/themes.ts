import { Themes } from "../../contexts/ThemeContext";

type Theme = {
  Primary: string;
  Secondary: string;
  FontColor: string;
  BorderRadius: string;
  FontColorError: string;
};

const defaultTheme = {
  BorderRadius: "8px",
  FontColorError: "red",
};

const DarkMode: Theme = {
  ...defaultTheme,
  Primary: "#311EA8",
  Secondary: "#EBB4E9",
  FontColor: "#fff",
};

const LightMode: Theme = {
  ...defaultTheme,
  Primary: "#A845E4",
  Secondary: "#FFDCFE",
  FontColor: "#fff",
};

const getTheme = (theme: Themes): Theme => {
  switch (theme) {
    case Themes.DarkMode:
      return DarkMode;
    case Themes.LightMode:
      return LightMode;
    // don't add a default case, so typescript
    // can tell if we covered all cases.
  }
};

export type { Theme };
export { getTheme };
