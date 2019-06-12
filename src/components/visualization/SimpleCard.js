import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Divider, Typography, Card, CardContent } from '@material-ui/core';

const useStyles = makeStyles(() =>({
  card: {
    width: '40px',
    height: '60px',
  },
  title: {
    fontSize: 14,
  },
  healthy: {
    'background-color': '#64DD17',
    color: 'ivory'
  },
  unhealthy: {
    'background-color': '#DD2C00',
    color: 'ivory'
  }
}));

function SimpleCard(props) {
  const classes = useStyles();
  return (
    <Grid item>
      <Card className={props.content > 75 ? classes.unhealthy : classes.healthy }>
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
              <Typography gutterBottom variant="h6">
                %
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
export default SimpleCard