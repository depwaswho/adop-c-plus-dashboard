import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import Tooltip from '@material-ui/core/Tooltip';
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
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>
          <Tooltip title="User Management">
            <IconButton edge="start" className={classes.menuButton} component={Link} to="/users" color="inherit" aria-label="Menu">
              <AccountCircle />
            </IconButton>
          </Tooltip>
          <Tooltip title="Statistics">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
              <InsertChartIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Settings">
            <IconButton edge="start" className={classes.menuButton} component={Link} to="/provision" color="inherit" aria-label="Menu">
              <SettingsIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
