import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    height: '100%'
  },
  media: {
    height: 90,
    'background-size': '60%'
  },
  aa: {
    paddingTop: "5px",
    paddingBottom: "5px"
  }

});

function ToolCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
    <Grid container>
    <Grid item>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.name}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="body2" component="h3">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Grid>
      <Grid item>
      <CardActions className={classes.aa}>
        <Button size="small" color="primary">
          Start
        </Button>
        <Button size="small" color="primary">
          Stop
        </Button>
        <Button size="small" color="primary">
          Logs
        </Button>
      </CardActions>
      </Grid>
      </Grid>
    </Card>
    
  );
}

export default ToolCard