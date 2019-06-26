import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ToolCard from './ToolCard';
import Grid from '@material-ui/core/Grid';
import Tools from '../tools.js'

const useStyles = makeStyles(theme => ({
    root: {
      padding: "5% 8%",
    },
}));

function Home() {
    const classes = useStyles();
    const tools = Tools
    return (
        <Grid container className={classes.root} direction="row" alignItems="stretch" spacing={2}>
        
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
    )
}

export default Home
