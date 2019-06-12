import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Card, CardActionArea, CardContent, CardMedia, CardActions, Typography, IconButton
} from '@material-ui/core';
import { PowerSettingsNew, Replay, DescriptionOutlined } from '@material-ui/icons';

const useStyles = makeStyles({
  card: {
    height: '100%'
  },
  media: {
    height: 85,
    'background-size': '60%'
  },
  content: {
    height: '100%'
  },
  actions: {
    display: 'flex',
    flex: '1 0 auto',
    justifyContent: 'center',
    'align-items': 'flex-end'
  }
});

function ToolCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea disableRipple style={{ height: '75%' }}>
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
      <CardActions disableSpacing={true} className={classes.actions}>
        <IconButton size="medium" style={{ color: '#51c551' }}>
          <PowerSettingsNew />
        </IconButton>
        <IconButton size="medium">
          <Replay />
        </IconButton>
        <IconButton size="medium">
          <DescriptionOutlined />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ToolCard