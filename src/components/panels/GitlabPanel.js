import React, { PureComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ExpansionPanel, Divider } from '@material-ui/core';
import GitlabLogo from './images/gitlab_logo.png';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import GitlabActivities from './functions/GitlabActivities';
import ToolsAPI from './data/gitlab_act_details.js'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

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
  act: {
    overflowY: 'scroll',
    height: '290px',
  },
}));

const rows = [
  createData('TOTAL COMMITS', 159, 6.0, 24, 4.0),
  createData('CONTRIBUTORS', 237, 9.0, 37, 4.3),
];

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

function createData(name, today, five, ten) {
  return { name, today, five, ten };
}

export default function SimpleExpansionPanel() {
  const classes = useStyles();
  const tools = ToolsAPI.all()

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" >
          <img src={GitlabLogo} class="Logo"/>
          <Typography className={classes.heading}>Gitlab</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography className={classes.he2}>COMMITS PER DAY</Typography>
                  <Divider/>
                  <ResponsiveContainer width="100%" height={200}>
                    <AreaChart className={classes.he3} data={data} >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="uv" stroke="#f07909" fill="#f07909" />
                    </AreaChart>
                  </ResponsiveContainer>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.he2}>SUMMARY</Typography>
                  <Divider/>
                  <ResponsiveContainer width="100%" height="auto">
                    <Paper className={classes.paper}>
                      <Table size="small">
                        <TableHead>
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell >Today</TableCell>
                            <TableCell >Last 5 days</TableCell>
                            <TableCell >Last 10 days</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map(row => (
                            <TableRow key={row.name}>
                              <TableCell className={classes.he3} component="th" scope="row">{row.name}</TableCell>
                              <TableCell className={classes.he3} >{row.today}</TableCell>
                              <TableCell className={classes.he3} >{row.five}</TableCell>
                              <TableCell className={classes.he3} >{row.ten}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Paper>
                  </ResponsiveContainer>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography className={classes.he2}>LATEST ACTIVITIES</Typography>
                <Divider />
                <div className={classes.act}>
                  <List className={classes.root}>
                    {tools.map(item => (
                      <GitlabActivities name={item.name} branch={item.branch} repo={item.repo}/>
                    ))}
                  </List>
                </div>
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}