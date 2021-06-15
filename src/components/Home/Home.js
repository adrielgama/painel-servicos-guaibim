import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  card: {
    marginTop: 30,
    width: 400,
    background: "#3c3c3b",
    color: "white",
    boxShadow: "0 3px 5px 2px rgba(60, 60, 59, .3)",
  },
  // media: {
  //   height: 400,
  // },
});

const Home = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.root}>
        {/* REDIRECT 01 */}
        <Link
          href="https://display-aj-guaibim.vercel.app/"
          target="_blank"
          // onClick={preventDefault}
        >
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  Dashboard Migração
                </Typography>
              </CardContent>
              <CardMedia
                className="media"
                image="/displayAJ.png"
                title="Display AJ"
              />
            </CardActionArea>
          </Card>
        </Link>

        {/* REDIRECT 02 */}
        <Link
          href="https://retira-em-loja-guaibim.vercel.app/"
          target="_blank"
          // onClick={preventDefault}
        >
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  Painel Retira em Loja
                </Typography>
              </CardContent>
              <CardMedia
                className="media"
                image="/retira.png"
                title="Painel Retira"
              />
            </CardActionArea>
          </Card>
        </Link>
      </Container>
    </React.Fragment>
  );
};

export default Home;
