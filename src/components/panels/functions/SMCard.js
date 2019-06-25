import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { Divider, Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme =>({
  card: {
    width: '40px',
    height: '60px',
  },
  title: {
    fontSize: 14,
  },
}));

export default function SimpleExpansionPanel(props) {
  const classes = useStyles();
  const col = "";
  return (
    <Grid item>
      <Card className={props.content2 === "%" && props.content > 75 ? "red2" : "green2" }>
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            {props.title}
          </Typography>
          <Divider/><br/>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography gutterBottom variant="h3">
                {props.content}
              </Typography>
            </Grid> &nbsp;&nbsp;
            <Grid item>
              <Typography gutterBottom variant="h13">
                {props.content2}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}