import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";

export const defaultMode = "light";

export const themeContext = React.createContext({
  mode: defaultMode,
  toggleMode: () => {}
});

export function toggleMode(setTheme) {
  setTheme((oldTheme) => {
    return createMuiTheme({
      ...oldTheme,
      palette: {
        primary: {
          main: oldTheme.palette.primary.main
        },
        secondary: {
          main: oldTheme.palette.secondary.main
        },
        type: oldTheme.palette.type === "dark" ? "light" : "dark"
      }
    });
  });
  return;
}
