import { createMuiTheme } from "@material-ui/core";
import { defaultMode } from "./themeContext";

const theme = createMuiTheme({
  palette: {
    type: defaultMode,
    primary: {
      main: "#ff4400"
    },
    secondary: {
      main: "#6d4c41"
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(",")
  }
});

export default theme;
