import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: 30,
    textAlign: "center",
  },
  toolbar: {
    height: 60,
    backgroundColor: "#3c3c3b",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: "#25ec7e",
    textAlign: "center",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense" className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            ESCOLHA PARA ONDE DESEJA IR
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
