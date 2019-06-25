import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  he2: {
    fontSize: theme.typography.pxToRem(10),
    fontWeight: theme.typography.fontWeightLight,
    paddingRight: "40px",
  },
}));

export default function SimpleExpansionPanel(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ListItem button>
        <ListItemText class="he2" secondary={props.artifact}/>&nbsp;&nbsp;&nbsp;
        <ListItemText class="he2" primary={props.repoName}/>
      </ListItem><br/>
    </div>
  );
}