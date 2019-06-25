import React, { PureComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import ToolsAPI from '../data/gitlab_act_details.js'
import {
  PieChart, Pie, Sector, Cell, ResponsiveContainer
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

const data4 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function SimpleExpansionPanel(props) {
  const classes = useStyles();
  const tools = ToolsAPI.all()
  return (
    <div className={classes.root}>
      <Paper>
        <Typography className={classes.he3}>{props.title}</Typography>
        <Divider/>
        <ResponsiveContainer width="100%" height={150}>
          <PieChart width="100%" height={150}>
          <Pie
          data={data4}
          cx="50%"
          cy="90%"
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={110}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label={renderCustomizedLabel}
          labelLine={false}>
          {
            data4.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
        </ResponsiveContainer>
      </Paper><br/>
      <br/>
    </div>
  );
}