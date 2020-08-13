import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

//https://www.iconshock.com/
// import pollsImg from "../imgs/recentPolls.png";
// import newPollImg from "../imgs/newPoll.png";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "./home.css";
import PollIcon from "@material-ui/icons/Poll";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const styles = (theme) => ({
  card: {
    margin: "auto",
    marginTop: theme.spacing(5),
    height: 300
  },

  media: {
    minHeight: 450,
    maxHeight: 550,
    maxWidth: 300
  }
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={false} sm={false} md={1} lg={1} xl={1}></Grid>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
            <Paper className={classes.paper}>
              <Card className={classes.card}>
                <CardContent className="card" align="center">
                  <a href="/recent">
                    <PollIcon
                      alt="view-polls"
                      className="icon"
                      color="primary"
                      style={{ fontSize: 150, color: "#1D8B75" }}
                    />
                  </a>

                  <Typography type="body1" component="h2">
                    Recent Polls
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
            <Paper className={classes.paper}>
              <Card className={classes.card}>
                <CardContent className="card" align="center">
                  <a href="/create">
                    <AddCircleIcon
                      alt="create-poll"
                      className="icon"
                      color="primary"
                      style={{ fontSize: 150, color: "#1D8B75" }}
                    />
                  </a>

                  <Typography type="body1" component="h2">
                    Create Poll
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={false} sm={false} md={1} lg={1} xl={1}></Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
