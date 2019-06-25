import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SonarqubePanel from './panels/SonarqubePanel';
import JenkinsPanel from './panels/JenkinsPanel';
import NexusPanel from './panels/NexusPanel';
import GitlabPanel from './panels/GitlabPanel';
import SeleniumPanel from './panels/SeleniumPanel';
import SensuPanel from './panels/SensuPanel';
import ServerMetricsPanel from './panels/ServerMetricsPanel';
import KibanaPanel from './panels/KibanaPanel';

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

  return (
    <div className={classes.root}>
      <ServerMetricsPanel/>
      <GitlabPanel/>
      <SonarqubePanel/>
      <JenkinsPanel/>
      <NexusPanel/>
      <SeleniumPanel/>
      <KibanaPanel/>
      <SensuPanel/>
    </div>
  );
}
