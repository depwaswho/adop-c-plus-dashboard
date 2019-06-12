import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Grid, Paper, Typography, ExpansionPanelSummary, ExpansionPanelDetails, ExpansionPanel, Divider 
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MetricsLogo from '../../assets/images/metrics_logo.png';
import LineChart from '../visualization/LineChart';
import SimpleCard from '../visualization/SimpleCard';

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
  logo: {
    height: '3.5vmin',
    'margin-right': '15px',
    'margin-top': '1px'
  }
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

function ServerMetricsPanel() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" >
          <img src={MetricsLogo} alt="" className={classes.logo}/>
          <Typography className={classes.heading}>Server Metrics</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Grid container spacing={2}>
                <SimpleCard title="CPU" content={60} content2="%"/>
                <SimpleCard title="Disk" content={90} content2="%"/>
                <SimpleCard title="Memory" content={23} content2="%"/>
                <SimpleCard title="Network" content={14} content2="%"/>
              </Grid>
            </Grid>
            <Divider/>
            <Grid item xs={12} sm={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                <Grid container>
                  <Grid item xs={12}>
                    <Paper className={classes.root2}>
                      <Typography className={classes.he2}> CPU </Typography>
                    </Paper><br/>
                    <LineChart title="CPU Usage" data={data}/>
                  </Grid>
                </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                <Grid container>
                  <Grid item xs={12}>
                    <Paper className={classes.root2}>
                      <Typography className={classes.he2}> Memory </Typography>
                    </Paper><br/>
                    <LineChart title="Memory Usage" data={data}/>
                  </Grid>
                </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                <Grid container>
                  <Grid item xs={12}>
                    <Paper className={classes.root2}>
                      <Typography className={classes.he2}> Disk </Typography>
                    </Paper><br/>
                    <LineChart title="Disk Usage" data={data}/>
                  </Grid>
                </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                <Grid item xs={12}>
                    <Paper className={classes.root2}>
                      <Typography className={classes.he2}> Network </Typography>
                    </Paper><br/>
                    <LineChart title="Network Usage" data={data}/>
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
export default ServerMetricsPanel