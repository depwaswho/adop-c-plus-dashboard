import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tools from '../tools.js'
import ToolCard from './ToolCard';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: '3% 7%'
    },
}));

function Home() {
    const classes = useStyles();
    const tools = Tools
    return (
        <div className={classes.root}>
        <Grid container direction="row" alignItems="stretch" spacing={2}>
        {tools.map(item => (
            <Grid key={item.name} item xs={6} sm={4} md={3}>
                <ToolCard
                    image={item.image}
                    name={item.name} 
                    description={item.description}
                />
            </Grid>
        ))}
    </Grid>
    </div>
    )
}

export default Home
