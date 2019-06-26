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
    margin: '10px',
    width: '90%'
  }
});

function SelectedToolCard(props) {
  const classes = useStyles();
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: 'selectedTools',
    canDrop: () => false,
    hover(item) {
      if (item.draggedId !== props.tool.id && item.draggedType === props.type) {
          const { index: overIndex } = props.findCard(props.tool.id, props.type)
          props.moveCard(item.draggedId, overIndex, props.type)
      }
    }
  });
  const [{ isDragging }, drag] = useDrag({
    item: { 
      type: 'selectedTools',
      draggedId: props.tool.id,
      draggedIndex: props.index,
      draggedToolName: props.tool.name,
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
      <img src={props.tool.image} alt={props.tool.name} className={classes.img} draggable={false}></img>
      </div>
      <Divider/>
      <FormControl key={props.tool.id} className={classes.form}>
        <InputLabel shrink htmlFor="tool-version">VERSION</InputLabel>
        <NativeSelect input={<Input name="age" id="tool-version" />}>
          {props.tool.availableVersions.map(item => (
            <option key={item} value={item}>{item}</option>
          ))}
        </NativeSelect>
        {props.tool.fields.map(item => (
          item.type === 'text'? (
            <TextField key={item.name} label={item.label} margin="dense"/>
          ) : (
            <TextField key={item.name} label={item.label} type="password" margin="dense"/>
          )
        ))}
        <br/>
      </FormControl>
      <br/>
    </Paper>
  );
}

export default SelectedToolCard
