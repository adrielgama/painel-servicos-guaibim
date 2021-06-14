import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  card: {
    width: 400,
  },
  media: {
    height: 400,
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.root}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/displayAJ.png"
              title="Display AJ"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Dashboard Migração
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        {/* REDIRECT 02 */}
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/retira.png"
              title="Display AJ"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Painel Retira em Loja
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default Home;
