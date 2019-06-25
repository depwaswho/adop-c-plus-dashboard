import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ExpansionPanel } from '@material-ui/core';
import NexusLogo from './images/nexus_logo.png';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ToolsAPI from './data/nexus_details.js'
import NexusRepo from './functions/NexusRepo';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  he2: {
    fontSize: theme.typography.pxToRem(10),
    fontWeight: theme.typography.fontWeightLight,
    paddingRight: "40px",
  },
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();
  const dense = React.useState(false);
  const tools = ToolsAPI.all()
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <img src={NexusLogo} class="Logo"/>
          <Typography className={classes.heading}>Nexus</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <div class="content">
              <p class="par">REPOSITORY</p>
              <Divider /><br/>
            </div>
            <List dense={dense} width="100%" backgroundColor="theme.palette.background.paper">
              {tools.map(item => (
                <NexusRepo repoName={item.repoName} artifact={item.artifact}/>
              ))}
            </List>
          </Grid>
        </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}