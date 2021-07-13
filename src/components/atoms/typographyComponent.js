import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    typography: {
        fontFamily: 'Poppins',
        color: '#000000',
        marginRight: theme.spacing(2),
    }
}))

export default function TypographyComponent(props){
    const classes = useStyles();
    return(
        <Typography variant = "h4" className = { classes.typography } style = {{} }>
            {props.content}
        </Typography>
    );
}