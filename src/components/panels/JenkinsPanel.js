import React, { PureComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ExpansionPanel, Divider } from '@material-ui/core';
import JenkinsLogo from './images/jenkins_logo.jpeg';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Link from '@material-ui/core/Link';
import {ResponsiveContainer} from 'recharts';
import { Link as RouterLink } from 'react-router-dom';
import { MemoryRouter as Router } from 'react-router';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  he2: {
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightLight,
  },
  he3: {
    fontSize: theme.typography.pxToRem(11),
    fontWeight: theme.typography.fontWeightLight,
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  chipG: {
    margin: theme.spacing(1),
    background: "#008f00",
    height: "10px",
    width: "10px",
  },
  chipY: {
    margin: theme.spacing(1),
    background: "#FFFF00",
    height: "10px",
    width: "10px",
  },
  chipR: {
    margin: theme.spacing(1),
    background: "#DD2C00",
    height: "10px",
    width: "10px",
  },
  cG: {color: "#008f00",},
  cR:{color: "#DD2C00",},
}));

const rows = [
  createData('SUCCESSFUL', '#159', 'Job151', 1, 2, 3, 6, 'Data not available', 'https://ls-london.jenkins.adop.accenture.com/job/Converse-3.0/job/Channel_Support_Microservices/job/Backend_ChannelAdaptor_AgentPortal/.com'),
  createData('FAILED', '#89', 'Job89', 1, 2, 3, 6, '30 min.', 'jenkins.com'),
];

function createData(status, buildNumber, jobName, successful, unstable, failed, total, duration, url) {
  return { status, buildNumber, jobName, successful, unstable, failed, total, duration, url };
}

const data = [
  {
    name: 'June 11, 2019', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'June 10, 2019', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'June 9, 2019', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'June 8, 2019', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'June 7, 2019', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'June 6, 2019', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'June 5, 2019', uv: 3490, pv: 4300, amt: 2100,
  },
];

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" >
          <img src={JenkinsLogo} class="Logo"/>
          <Typography className={classes.heading}>Jenkins</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
                  <Typography className={classes.he2}>BUILDS</Typography>
                  <Divider/>
                  <ResponsiveContainer width="100%" height="auto">
                    <Paper className={classes.paper}>
                      <Table size="small">
                        <TableHead>
                          <TableRow>
                            <TableCell>Status</TableCell>
                            <TableCell >Build Number</TableCell>
                            <TableCell >Job Name</TableCell>
                            <TableCell >Successful</TableCell>
                            <TableCell >Unstable</TableCell>
                            <TableCell >Failed</TableCell>
                            <TableCell >Total</TableCell>
                            <TableCell >Duration</TableCell>
                            <TableCell >URL</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map(row => (
                            <TableRow key={row.name}>
                              <TableCell className={classes.he3} component="th" scope="row">
                                {row.status === "SUCCESSFUL" ? (
                                  <DoneIcon className={classes.cG}/>
                                ) : (
                                  <ErrorIcon className={classes.cR}/>
                                )
                                }     
                              </TableCell>
                              <TableCell className={classes.he3} >{row.buildNumber}</TableCell>
                              <TableCell className={classes.he3} >{row.jobName}</TableCell>
                              <TableCell className={classes.he3} >
                                <Chip
                                size="small"
                                label=""
                                className={classes.chipG}
                                />
                                {row.successful}
                            
                              </TableCell>
                              <TableCell className={classes.he3} >
                                <Chip
                                size="small"
                                label=""
                                className={classes.chipY}
                                />{row.unstable}
                              </TableCell>
                              <TableCell className={classes.he3} >
                                <Chip
                                size="small"
                                label=""
                                className={classes.chipR}
                                />{row.failed}
                              </TableCell>
                              <TableCell className={classes.he3} >{row.total}</TableCell>
                              <TableCell className={classes.he3} >{row.duration}</TableCell>
                              <TableCell className={classes.he3} >
                                <Router>
                                <Link component={RouterLink} to={row.url}>
                                {row.url}
                                </Link>
                                </Router>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Paper>
                  </ResponsiveContainer>
                </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}