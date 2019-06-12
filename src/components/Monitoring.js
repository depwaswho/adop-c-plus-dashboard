import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ServerMetricsPanel from './monitoring/ServerMetricsPanel';
import SonarqubePanel from './monitoring/SonarqubePanel';
import JenkinsPanel from './monitoring/JenkinsPanel';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function Monitoring() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ServerMetricsPanel/>
      <SonarqubePanel/>
      <JenkinsPanel/>
      {/* <GitlabPanel/>
      <NexusPanel/>
      <SeleniumPanel/>
      <KibanaPanel/>
      <SensuPanel/> */}
    </div>
  );
}

export default Monitoring
