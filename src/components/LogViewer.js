import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 2),
  },
  log: {
    background: '#343a40',
    'min-height': '180px',
    'max-height': '200px',
    color: '#fff',
    'font-family': "'Lucida Console', Monaco, monospace",
    'font-size': '70%',
    padding: '1%',
    overflow: 'auto',
    'white-space': 'pre',
    'line-height': '1.5em'
  }
}));

function LogViewer(props) {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="subtitle1" gutterBottom>
          {props.title}
        </Typography>
        <div className={classes.log}>
          {props.logs}
        </div>
      </Paper>
    </div>
  );
}

export default LogViewer;
