import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Badge, Tooltip } from '@material-ui/core';
import { Notifications, AccountCircle, Settings, InsertChart } from '@material-ui/icons';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  link: {
    margin: theme.spacing(1),
    color: "white",
    "text-decoration": "none !important",
  },
}));
  
function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#24292e' }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.link}>
              DevOps Platform
            </Link>
          </Typography>
          <Tooltip title="Notification">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
              <Badge badgeContent={11} color="secondary">
                <Notifications />
              </Badge>
            </IconButton>
          </Tooltip>
          <Tooltip title="User Management">
            <IconButton edge="start" className={classes.menuButton} component={Link} to="/users" color="inherit" aria-label="Menu">
              <AccountCircle />
            </IconButton>
          </Tooltip>
          <Tooltip title="Monitoring">
            <IconButton edge="start" className={classes.menuButton} component={Link} to="/monitoring" color="inherit" aria-label="Menu">
              <InsertChart />
            </IconButton>
          </Tooltip>
          <Tooltip title="Settings">
            <IconButton edge="start" className={classes.menuButton} component={Link} to="/provision" color="inherit" aria-label="Menu">
              <Settings />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
