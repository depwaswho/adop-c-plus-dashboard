import React, { useState, useEffect } from 'react';
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AvailableToolCard from './AvailableToolCard';
import ToolsAPI from '../tools.js'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Grid from '@material-ui/core/Grid';
import { useDrop } from 'react-dnd'
import Typography from '@material-ui/core/Typography';
import update from 'immutability-helper'
import SelectedToolCard from './SelectedToolCard';
import LogViewer from './LogViewer';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import * as io from 'socket.io-client';

const greenTheme = createMuiTheme({ palette: { primary: green } });

const useStyles = makeStyles(theme => ({
    root: {
      padding: '5% 8%',
    },
    gridList: {
      height: '100%',
    },
    startButton: {
        float: 'right',
        color: 'white'
    },
    footer: {
        backgroundColor: 'white'
    },
}));

function Provision() {
    const classes = useStyles();
    const [tools, setTools] = useState(ToolsAPI.all());
    const [selectedTools, setSelectedTools] = useState([]);
    const [showLogs, setshowLogs] = useState(true);
    const [logs, setLogs] = useState("");
    
    const socket = io.connect("http://3.0.21.95:5000");

    useEffect(() => {
        socket.on('logs', (data) => {
            setLogs(data)
        });
    });

    function moveCard(id, atIndex, type) {
        let { tool, index } = findCard(id, type)
        if(type === 1) {
            setTools(update(tools, {
                $splice: [[index, 1], [atIndex, 0, tool]],
            }));
        } else if (type === 2) {
            setSelectedTools(update(selectedTools, {
                $splice: [[index, 1], [atIndex, 0, tool]],
            }))
        }
    }
    function findCard(id, type) {
        let tool;
        if(type === 1) {
            tool = tools.filter(c => c.id === id)[0]
            return { tool, index: tools.indexOf(tool) }
        } else if (type === 2) {
            tool = selectedTools.filter(c => c.id === id)[0]
            return { tool, index: selectedTools.indexOf(tool) }
        }
    }
    function handleShowLogs() {
        setshowLogs(!showLogs)
    }
    const [, drop] = useDrop({
		accept: 'tools',
		drop: item => {
            setSelectedTools(update(selectedTools, {
                $push: tools.filter(c => c.id === item.draggedId),
            }))
            setTools(tools => tools.filter(c => c.id !== item.draggedId))
        }
    })
    
    const [, drop2] = useDrop({
		accept: 'selectedTools',
		drop: item => {
            setTools(update(tools, {
                $push: selectedTools.filter(c => c.id === item.draggedId),
            }))
            setSelectedTools(selectedTools => selectedTools.filter(c => c.id !== item.draggedId))
        }
	})

    return (
        <div>
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item md={12}>
                        <MuiThemeProvider theme={greenTheme}>
                            <Button 
                                disabled={selectedTools.length === 0} 
                                variant="contained" color="primary" 
                                className={classes.startButton}
                                onClick={() => { socket.emit('execute', 'ansible') }}>
                                Start
                            </Button>
                        </MuiThemeProvider>
                        <FormControlLabel
                            control={
                            <Switch
                                checked={showLogs}
                                onChange={handleShowLogs}
                                color="primary"
                            />
                            }
                            label="Show logs"
                        />
                    </Grid>
                    <Grid item md={2}>
                        <Typography variant="overline" display="block" gutterBottom>
                            Tool List
                        </Typography>
                        <GridList className={classes.gridList} ref={drop2} cellHeight={75}>
                            {tools.map((item, index) => (
                            <GridListTile key={item.id}>
                                <AvailableToolCard
                                    index={index}
                                    id={item.id}
                                    image={item.image}
                                    alt={item.alt} 
                                    toolName={item.toolName} 
                                    toolDescription={item.toolDescription}
                                    moveCard={moveCard}
                                    findCard={findCard}
                                    type={1}
                                />
                            </GridListTile>
                            ))}
                        </GridList>
                    </Grid>
                    <Grid item md={10}>
                        <Typography variant="overline" display="block" gutterBottom>
                            Selected Tools
                        </Typography>
                        <GridList className={classes.gridList} ref={drop} cellHeight={210} cols={4}>
                            {selectedTools.map((item, index) => (
                                <GridListTile key={item.id}>
                                    <SelectedToolCard 
                                        index={index}
                                        id={item.id}
                                        image={item.image}
                                        alt={item.alt}
                                        toolName={item.toolName}
                                        toolDescription={item.toolDescription}
                                        moveCard={moveCard}
                                        findCard={findCard}
                                        type={2}
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </Grid>
                </Grid>
                <br/>
                <br/>
                <br/>
                {showLogs && <LogViewer title="Ansible Logs" logs={logs}/>}
            </div>
        </div>
    )
}

export default Provision
