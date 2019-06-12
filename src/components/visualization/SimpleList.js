import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, ListItem, ListItemText, Chip } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  success: {
    margin: theme.spacing(1),
    background: "#008f00",
    color: "#FFFFFF",
    fontSize: "10px",
    height: "14px",
  },
  error: {
    margin: theme.spacing(1),
    background: "#DD2C00",
    color: "#FFFFFF",
    fontSize: "10px",
    height: "14px",
  },
}));

function SimpleList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ListItem button>
        <Chip
          size="small"
          label={props.success? 'Passed' : 'Failed'}
          className={props.success? classes.success :  classes.error}
        />
        <ListItemText primary={props.text}/>
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  );
}
export default SimpleList