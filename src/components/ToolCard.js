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
  }
});

function ToolCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.alt}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="body2" component="h3">
            {props.toolDescription}
          </Typography>
        </CardContent>
        
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
        </CardActions>
    </Card>
  );
}

export default ToolCard