import React, { PureComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import ToolsAPI from '../data/gitlab_act_details.js'
import {
  AreaChart, Area, LineChart, Line, Legend, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  he3: {
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightLight,
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
}));

export default function SimpleExpansionPanel(props) {
  const classes = useStyles();
  const tools = ToolsAPI.all()

  return (
    <div className={classes.root}>
      <Paper>
        <Typography className={classes.he3}>{props.title}</Typography>
        <Divider/>
        <ResponsiveContainer width="100%" height={150}>
          <LineChart className={classes.he3} data={props.data} margin={{ top: 20, right: 10}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeDasharray="5 5"/>
          </LineChart>
        </ResponsiveContainer>
        </Paper><br/>
    </div>
  );
}