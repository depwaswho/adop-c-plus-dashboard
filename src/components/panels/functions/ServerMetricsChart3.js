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

const getPercent = (value, total) => {
  const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio, 2);
};

const toPercent = (decimal, fixed = 0) => `${(decimal * 100).toFixed(fixed)}%`;
const renderTooltipContent = (o) => {
  const { payload, label } = o;
  const total = payload.reduce((result, entry) => (result + entry.value), 0);

  return (
    <div className="customized-tooltip-content">
      <p className="total">{`${label} (Total: ${total})`}</p>
      <ul className="list">
        {
        	payload.map((entry, index) => (
          	<li key={`item-${index}`} style={{ color: entry.color }}>
            	{`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
           </li>
        	))
        }
      </ul>
    </div>
  );
};
export default function SimpleExpansionPanel(props) {
  const classes = useStyles();
  const tools = ToolsAPI.all()

  return (
    <div className={classes.root}>
      <Paper>
        <Typography className={classes.he3}>{props.title}</Typography>
        <Divider/>
        <ResponsiveContainer width="100%" height={150}>
        <AreaChart className={classes.he3} data={props.data} margin={{ top: 20, right: 10}}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={toPercent} />
          <Tooltip content={renderTooltipContent} />
          <Area type="monotone" dataKey="a" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="b" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="c" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
        </ResponsiveContainer>
      </Paper><br/>
    </div>
  );
}