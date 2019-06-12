import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Grid, Table, TableBody, TableHead, TableCell, TableRow, Paper, Chip, Link,
  Typography, ExpansionPanelSummary, ExpansionPanelDetails, ExpansionPanel, Divider
} from '@material-ui/core';
import {ResponsiveContainer} from 'recharts';
import { Link as RouterLink } from 'react-router-dom';
import { MemoryRouter as Router } from 'react-router';
import { Done, ErrorOutline, ExpandMore } from '@material-ui/icons';
import JenkinsLogo from '../../assets/images/jenkins_logo.jpeg';

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
  cG: {color: "#008f00"},
  cR:{color: "#DD2C00"},
  logo: {
    height: '3.5vmin',
    'margin-right': '15px',
    'margin-top': '1px'
  }
}));

const rows = [
  createData('SUCCESSFUL', '#159', 'Job151', 1, 2, 3, 6, 'Data not available', 'https://ls-london.jenkins.adop.accenture.com/job/Converse-3.0/job/Channel_Support_Microservices/job/Backend_ChannelAdaptor_AgentPortal/.com'),
  createData('FAILED', '#89', 'Job89', 1, 2, 3, 6, '30 min.', 'jenkins.com'),
];

function createData(status, buildNumber, jobName, successful, unstable, failed, total, duration, url) {
  return { status, buildNumber, jobName, successful, unstable, failed, total, duration, url };
}

function JenkinsPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header" >
          <img src={JenkinsLogo} alt="" className={classes.logo}/>
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
                            <TableRow key={row.buildNumber}>
                              <TableCell className={classes.he3} component="th" scope="row">
                                {row.status === "SUCCESSFUL" ? (
                                  <Done className={classes.cG}/>
                                ) : (
                                  <ErrorOutline className={classes.cR}/>
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
export default JenkinsPanel