import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useDrag, useDrop } from 'react-dnd'

const useStyles = makeStyles({
  card: {
    height: '3.5vmin'
  },
  media: {
    height: 90,
    'background-size': '60%'
  },
  img: {
    margin: 'auto',
    display: 'block',
    'max-width': '85%',
    // width: '9vmin',
    height: '3vmin',

  },
  paper: {
    height: '12vmin',
    display: 'flex',
	  'vertical-align': 'middle'
  }
});

function AvailableToolCard(props) {
  const classes = useStyles();
  const ref = useRef(null)
  const [, drop] = useDrop({
    accept: 'tools',
    canDrop: () => false,
    hover(item) {
      if (item.draggedId !== props.tool.id && item.draggedType === props.type) {
        const { index: overIndex } = props.findCard(props.tool.id, props.type)
        props.moveCard(item.draggedId, overIndex, props.type)
      }
    }
  })
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: 'tools',
      draggedId: props.tool.id,
      draggedIndex: props.index,
      draggedToolName: props.tool.name,
      draggedType: props.type
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })
  drag(drop(ref))
  return (
    <Paper className={classes.paper} ref={ref} style={{ opacity: isDragging ? 0 : 1 }}>
      <img src={props.tool.image} alt={props.tool.name} className={classes.img} draggable={false}></img>
    </Paper>
  );
}

export default AvailableToolCard