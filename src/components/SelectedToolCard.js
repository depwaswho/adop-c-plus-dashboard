import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Divider, FormControl, NativeSelect, InputLabel, TextField } from '@material-ui/core';
import { useDrag, useDrop } from 'react-dnd'

const useStyles = makeStyles({
  img: {
    margin: 'auto',
    display: 'block',
    'max-width': '100%',
    height: '5.5vmin'
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
  props.tool.selectedVersion = props.tool.selectedVersion || props.tool.availableVersions[0];
  return (
    <Paper className={classes.paper} ref={ref} style={{ opacity: isDragging ? 0 : 1 }}>
      <div style={{ margin: '10px' }}>
      <img src={props.tool.image} alt={props.tool.name} className={classes.img} draggable={false}></img>
      </div>
      <Divider/>
      <form>
      <FormControl key={props.tool.id} className={classes.form}>
        <InputLabel shrink htmlFor="tool-version">VERSION</InputLabel>
        <NativeSelect defaultValue={props.tool.selectedVersion} onChange={(e) => props.tool.selectedVersion = e.target.value}>
          {props.tool.availableVersions.map(item => (
            <option key={item} value={item}>{item}</option>
          ))}
        </NativeSelect>
        {props.tool.fields.map(item =>
          item.type === 'text'? ( 
            <TextField key={item.name} label={item.label} defaultValue={item.value} margin="dense" onChange={(e) => item.value = e.target.value}/>
          ) : item.type === 'password'? (
            <TextField key={item.name} label={item.label} defaultValue={item.value} type="password" margin="dense" onChange={(e) => item.value = e.target.value}/>
          ) : ( "" )
        )}
        <br/>
      </FormControl>
      </form>
      <br/>
    </Paper>
  );
}

export default SelectedToolCard
