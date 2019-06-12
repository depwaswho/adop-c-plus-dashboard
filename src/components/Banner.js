import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(60deg, rgba(0,140,13,1) 0%, rgba(0,250,4,1) 100%)',
    color: 'white',
    padding: '2% 5%',
  },
}));

function Banner() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography variant="h4" align="left" color="inherit" gutterBottom>
        DevOps Dashboard
      </Typography>
      <Typography align="left" color="inherit" paragraph>
        This platform can be used for demos, training, and to start real projects.
      </Typography>
    </Container>
  );
}

export default Banner;
