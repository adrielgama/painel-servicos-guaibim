import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import HomeComponent from "../../components/Home/Home";
// import Header from "../../components/Header/Header";
import Copyright from "../../components/Copyright/Copyright";

const Home = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Header /> */}
      <HomeComponent />
      <Copyright />
    </React.Fragment>
  );
};

export default Home;
