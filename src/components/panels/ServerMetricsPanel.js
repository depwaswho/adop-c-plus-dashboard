import React, { PureComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ExpansionPanel, Divider } from '@material-ui/core';
import MetricsLogo from './images/metrics_logo.png';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ToolsAPI from './data/gitlab_act_details.js'
import ServerMetricsChart1 from './functions/ServerMetricsChart1';
import ServerMetricsChart2 from './functions/ServerMetricsChart2';
import ServerMetricsChart3 from './functions/ServerMetricsChart3';
import ServerMetricsChart4 from './functions/ServerMetricsChart4';
import SMCard from './functions/SMCard';

const useStyles = makeStyles(theme => ({
  root2: {
    width: '100%',
    background: '#ECEFF1',
  },
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  he2: {
    fontSize: theme.typography.pxToRem(13),
    fontWeight: theme.typography.fontWeightLight,
    color: '#263238',
    textAlign: 'center',

  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
}));

const data = [
  {
    name: 'June 11, 2019', uv: 40, pv: 24, amt: 24,
  },
  {
    name: 'June 10, 2019', uv: 30, pv: 98, amt: 10,
  },
  {
    name: 'June 9, 2019', uv: 20, pv: 90, amt: 29,
  },
  {
    name: 'June 8, 2019', uv: 27, pv: 39, amt: 40,
  },
  {
    name: 'June 7, 2019', uv: 18, pv: 48, amt: 81,
  },
  {
    name: 'June 6, 2019', uv: 23, pv: 38, amt: 25,
  },
  {
    name: 'June 5, 2019', uv: 390, pv: 43, amt: 21,
  },
];

const data2 = [
  {
    name: '09:00', uv: 30, pv: 50, amt: 24,
  },
  {
    name: '09:00', uv: 30, pv: 58, amt: 10,
  },
  {
    name: '09:00', uv: 30, pv: 50, amt: 29,
  },
  {
    name: '09:00', uv: 37, pv: 59, amt: 40,
  },
  {
    name: '09:00', uv: 38, pv: 58, amt: 81,
  },
  {
    name: '09:00', uv: 35, pv: 58, amt: 25,
  },
  {
    name: '09:00', uv: 30, pv: 54, amt: 21,
  },
];

const data3 = [
  {
    month: '2015.01', a: 4000, b: 2400, c: 2400,
  },
  {
    month: '2015.02', a: 3000, b: 1398, c: 2210,
  },
  {
    month: '2015.03', a: 2000, b: 9800, c: 2290,
  },
  {
    month: '2015.04', a: 2780, b: 3908, c: 2000,
  },
  {
    month: '2015.05', a: 1890, b: 4800, c: 2181,
  },
  {
    month: '2015.06', a: 2390, b: 3800, c: 2500,
  },
  {
    month: '2015.07', a: 3490, b: 4300, c: 2100,
  },
];

export default function SimpleExpansionPanel() {
  const classes = useStyles();
  const tools = ToolsAPI.all()
  
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" >
          <img src={MetricsLogo} class="Logo"/>
          <Typography className={classes.heading}>Server Metrics</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Grid container spacing={2}>
                <SMCard title="Processes" content={34} content2="procs"/>
                <SMCard title="Disk" content={90} content2="%"/>
                <SMCard title="Processes" content="75" content2="procs"/>
                <SMCard title="Memory" content={2.345} content2="%"/>
                <SMCard title="Processes" content={34} content2="procs"/>
                <SMCard title="Disk" content={90} content2="%"/>
                <SMCard title="Processes" content="75" content2="procs"/>
                <SMCard title="Memory" content={2.345} content2="%"/>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                <Grid container>
                  <Grid item xs={12}>
                    <Paper className={classes.root2}>
                      <Typography className={classes.he2}> CPU </Typography>
                    </Paper><br/>
                    <ServerMetricsChart1 title="CPU Usage" data={data}/>
                    <ServerMetricsChart1 title="CPU Usage" data={data}/>
                  </Grid>
                </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                <Grid container>
                  <Grid item xs={12}>
                    <Paper className={classes.root2}>
                      <Typography className={classes.he2}> Memory </Typography>
                    </Paper><br/>
                    <ServerMetricsChart2 title="Committed Bytes VS Max" data={data2}/>
                    <ServerMetricsChart2 title="Committed Bytes VS Max" data={data2}/>
                  </Grid>
                </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                <Grid container>
                  <Grid item xs={12}>
                    <Paper className={classes.root2}>
                      <Typography className={classes.he2}> Disk </Typography>
                    </Paper><br/>
                    <ServerMetricsChart3 title="Free Disk" data={data3}/>
                    <ServerMetricsChart3 title="Free Disk" data={data3}/>
                    <ServerMetricsChart3 title="Free Disk" data={data3}/>
                    <ServerMetricsChart3 title="Free Disk" data={data3}/>
                  </Grid>
                </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                <Grid item xs={12}>
                    <Paper className={classes.root2}>
                      <Typography className={classes.he2}> Network </Typography>
                    </Paper><br/>
                    <ServerMetricsChart2 title="Network Throughput" data={data2}/>
                    <ServerMetricsChart2 title="Network Throughput" data={data2}/>
                    <ServerMetricsChart4 title="Network Throughput" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}