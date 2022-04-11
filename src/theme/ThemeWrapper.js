import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import theme from "./index";
import { themeContext, toggleMode } from "./themeContext";

const ThemeWrapper = ({ children }) => {
  const [currentTheme, setCurrentTheme] = React.useState(theme);
  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        <themeContext.Provider
          value={{
            mode: currentTheme.palette.type,
            toggleMode: () => toggleMode(setCurrentTheme)
          }}
        >
          <main>{children}</main>
        </themeContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default ThemeWrapper;
