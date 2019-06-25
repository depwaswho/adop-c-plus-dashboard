import React, { PureComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import InputIcon from '@material-ui/icons/Input';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowsIcon from '@material-ui/icons/CompareArrows';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  inline: {
    display: 'inline',
  },
}));

export default function SimpleExpansionPanel(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={props.name}
          secondary={
            <React.Fragment>
              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  {props.branch.includes('pushed') ? (
                    <InputIcon/>
                  ) : props.branch.includes('deleted') ? (
                    <DeleteIcon/>
                  ) : (
                    <ArrowsIcon/>
                  )}
                </ListItemIcon>
                <ListItemText>
                  <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">{props.branch}
                  </Typography>{props.repo}
                </ListItemText>
              </ListItem>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" /><br/>
    </div>
  );
}