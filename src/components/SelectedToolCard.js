import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Divider } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import { useDrag, useDrop } from 'react-dnd'

const useStyles = makeStyles({
    img: {
        'max-height': '38px',
        margin: 'auto',
        display: 'block',
        'max-width': '100%'
    },
    paper: {
        height: '100%', 
        overflowY: 'scroll',
        overflowX: 'hidden'
    },
    form: {
        margin: '10px'
    }
});

function SelectedToolCard(props) {
  const classes = useStyles();
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: 'selectedTools',
    canDrop: () => false,
    hover(item) {
      if (item.draggedId !== props.id && item.draggedType === props.type) {
          const { index: overIndex } = props.findCard(props.id, props.type)
          props.moveCard(item.draggedId, overIndex, props.type)
      }
    }
  });
  const [{ isDragging }, drag] = useDrag({
    item: { 
      type: 'selectedTools',
      draggedId: props.id,
      draggedIndex: props.index,
      draggedToolName: props.toolName,
      draggedType: props.type
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  });
  drag(drop(ref))
  return (
    <Paper className={classes.paper} ref={ref} style={{ opacity: isDragging ? 0 : 1 }}>
        <div style={{ margin: '10px' }}>
        <img src={props.image} alt={props.toolName} className={classes.img} draggable={false}></img>
        </div>
        <Divider/>
        <FormControl className={classes.form}>
            <InputLabel shrink htmlFor="age-native-label-placeholder">VERSION</InputLabel>
            <NativeSelect input={<Input name="age" id="age-native-label-placeholder" />}>
                <option value="">latest</option>
                <option value={10}>1.0</option>
                <option value={20}>2.0</option>
                <option value={30}>3.0</option>
            </NativeSelect>
            <TextField label="Username" margin="dense"/>
            <TextField label="Password" type="password" margin="dense"/>
            <br/>
        </FormControl>
        <br/>
    </Paper>
  );
}

export default SelectedToolCard
