import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ExpansionPanel, ExpansionPanelSummary, 
    ExpansionPanelDetails, Typography,Divider, Grid, List
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SonarqubeLogo from '../../assets/images/sonarqube_logo.png';
import SimpleList from '../visualization/SimpleList';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  logo: {
    height: '3.5vmin',
    'margin-right': '15px',
    'margin-top': '1px'
  },
  title: {
    'font-family': 'Roboto',
    'font-size': '12px',
    'font-weight': 200
  },
  content: {
    'font-family': 'Roboto',
    'font-size': '12px'
  },
  list: {
    backgroundColor: theme.palette.background.paper,
    width: '100%'
  }
}));

function SonarqubePanel() {
  const classes = useStyles();
  const tools = [{"key":"org.sonarqube:sonarqube-scanner","name":"Example of SonarQube Scanner Usage","status":"SUCCESS"},{"key":"org.sonarqube:sonarqube-scanner2","name":"Example of SonarQube Scanner Usage2","status":"ERROR"}] 

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <img src={SonarqubeLogo} alt="" className={classes.logo}/>
            <Typography className={classes.heading}>Sonarqube</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <div className={classes.content}>
              <p className={classes.title}>PROJECTS</p>
              <Divider /><br/>
            </div>
            <List className={classes.list}>
              {tools.map(item => (
                <SimpleList key={item.key} text={item.name} success={item.status === 'SUCCESS'}/>
              ))}
            </List>
          </Grid>
        </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default SonarqubePanel
