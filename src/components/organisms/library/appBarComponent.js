import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import TypographyComponent from '../../atoms/typographyComponent';




const useStyles = makeStyles((theme) => ({
    appBar: {
        color: "#ffffff",
        flexGrow: 3,
    },
}))


export default function AppBarComponent(props){
    const classes = useStyles();
    return (
        <AppBar className = { classes.appBar} color="#ffffff" spacing = "2">
            <Toolbar>
                <TypographyComponent variant = "h4" content = "Blinkist"/>
                <IconButton>

                </IconButton>
                <TypographyComponent variant = "h4" content = "Explore"/>
                <TypographyComponent variant = "h4" content = "My Library"/>
                <TypographyComponent variant = "h4" content = "Highlights"/>
            </Toolbar>
        </AppBar>
    );
}