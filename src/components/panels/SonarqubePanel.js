import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ExpansionPanel } from '@material-ui/core';
import SonarqubeLogo from './images/sonarqube_logo.png';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ToolsAPI from './data/sonar_details.js'
import SonarList from './functions/SonarList';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();
  const dense = React.useState(false);
  const tools = ToolsAPI.all()

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img src={SonarqubeLogo} class="Logo"/>
          <Typography className={classes.heading}>Sonarqube</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <div class="content">
              <p class="par">PROJECTS</p>
              <Divider /><br/>
            </div>
            <List dense={dense} width="100%" backgroundColor="theme.palette.background.paper">
              {tools.map(item => (
                <SonarList projName={item.projName} status={item.status}/>
              ))}
            </List>
          </Grid>
        </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}