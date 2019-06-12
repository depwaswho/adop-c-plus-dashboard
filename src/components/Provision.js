import React, { useState, useEffect } from 'react';
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { 
    Grid, GridList, GridListTile, Button, Typography, FormControlLabel, Switch 
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { useDrop } from 'react-dnd';
import Tools from '../tools.js';
import AvailableToolCard from './AvailableToolCard';
import SelectedToolCard from './SelectedToolCard';
import LogViewer from './LogViewer';
import update from 'immutability-helper';
import * as io from 'socket.io-client';
import axios from 'axios';

const greenTheme = createMuiTheme({ palette: { primary: green } });

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
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
    const [tools, setTools] = useState(Tools);
    const [selectedTools, setSelectedTools] = useState([]);
    const [showLogs, setshowLogs] = useState(true);
    const [logs, setLogs] = useState("");
    const [width, setWIdth] = useState(window.innerWidth)
    const socket = io.connect(process.env.REACT_APP_API_URL);

    socket.on('logs', (data) => {
        setLogs(data);
    });

    useEffect(() => {
        const handleResize = () => {
            setWIdth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => { window.removeEventListener('resize', handleResize) }
    }, [])

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + '/test')
        .then(res => {
            res.data.forEach(item => {
                setTools(tools => tools.filter(c => c.id !== item.id))
            })
            setSelectedTools(selectedTools => selectedTools = res.data)
        });
    }, [])

    useEffect(() => {
        if(selectedTools.length === 0) {
            setLogs("");
        }
    }, [selectedTools]);

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
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <MuiThemeProvider theme={greenTheme}>
                            <Button
                                disabled={selectedTools.length === 0}
                                variant="contained"
                                color="primary"
                                className={classes.startButton}
                                onClick={() => {
                                    socket.connected?
                                    socket.emit('execute', 'ansible') : setLogs('Unable to start, Not connected to socket!')
                                    setLogs(JSON.stringify(selectedTools, undefined, 2))
                                }}>
                                Start
                            </Button>
                        </MuiThemeProvider>
                        <FormControlLabel
                            control={<Switch checked={showLogs} onChange={handleShowLogs} color="primary"/>}
                            label="Show logs"
                        />
                    </Grid>
                    <Grid item xs={3} sm={2} md={2} lg={2} xl={2}>
                        <Typography variant="overline" display="block" gutterBottom>
                            Tool List
                        </Typography>
                        <GridList className={classes.gridList} ref={drop2} cellHeight={75} cols={width < 768? 1 : 2}>
                            {tools.map((item, index) => (
                            <GridListTile key={item.id}>
                                <AvailableToolCard
                                    index={index}
                                    tool={item}
                                    moveCard={moveCard}
                                    findCard={findCard}
                                    type={1}
                                />
                            </GridListTile>
                            ))}
                        </GridList>
                    </Grid>
                    <Grid item xs={9} sm={10} md={10} lg={10} xl={10}>
                        <Typography variant="overline" display="block" gutterBottom>
                            Selected Tools
                        </Typography>
                        <GridList className={classes.gridList} ref={drop} cellHeight={210} cols={width < 768? 2 : (width > 768 && width < 900)? 3 : 4}>
                            {selectedTools.map((item, index) => (
                                <GridListTile key={item.id}>
                                    <SelectedToolCard
                                        index={index}
                                        tool={item}
                                        moveCard={moveCard}
                                        findCard={findCard}
                                        type={2}
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </Grid>
                </Grid>
                <br/><br/><br/>
                {showLogs && <LogViewer title="Ansible Logs" logs={logs}/>}
            </div>
        </div>
    )
}

export default Provision
