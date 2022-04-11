import React, { useContext } from "react";
import { themeContext } from "./themeContext";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  button: {
    overflow: "hidden",
    all: "unset",
    display: "flex",
    borderRadius: 50,
    borderStyle: "solid",
    cursor: "pointer"
  },
  icon: {
    transform: `translateY(-100%)`,
    transition: `transform 500ms`,
    padding: 3
  },
  visibleIcon: {
    transform: `translateY(0)`
  }
}));

const ThemeToggleButton = () => {
  const classes = useStyles();
  const themeCtx = useContext(themeContext);
  return (
    <button className={classes.button} onClick={themeCtx.toggleMode}>
      <WbSunnyIcon
        fontSize="small"
        color="inherit"
        className={`${classes.icon} ${
          themeCtx.mode === "light" && classes.visibleIcon
        }`}
      />
      <Brightness2Icon
        fontSize="small"
        color="inherit"
        className={`${classes.icon} ${
          themeCtx.mode === "dark" && classes.visibleIcon
        }`}
      />
    </button>
  );
};
export default ThemeToggleButton;
