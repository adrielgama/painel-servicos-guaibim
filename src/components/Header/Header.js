import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: 80,
    textAlign: "center",
  },
  toolbar: {
    height: 70,
    backgroundColor: "#3c3c3b",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: "#fff",
    textAlign: "center",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        {/* <Toolbar variant="dense" className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            Escolha para onde deseja ir
          </Typography>
        </Toolbar> */}
      </AppBar>
    </div>
  );
};

export default Header;
