import React, { PureComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  chip: {
    margin: theme.spacing(1),
    background: "#008f00",
    color: "#FFFFFF",
    fontSize: "10px",
    height: "14px",
  },
  chip2: {
    margin: theme.spacing(1),
    background: "#DD2C00",
    color: "#FFFFFF",
    fontSize: "10px",
    height: "14px",
  },
}));

export default function SimpleExpansionPanel(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ListItem button>
        {props.status === "Passed" ? (
          <Chip
          size="small"
          label="Passed"
          className={classes.chip}
          />
        ) : (
          <Chip
          size="small"
          label="&nbsp;Failed&nbsp;&nbsp;"
          className={classes.chip2}
          />
          )
        }
        <ListItemText class="he2" primary={props.projName}/>        
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  );
}