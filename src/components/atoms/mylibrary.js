import React from 'react';
import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import TypographyComponent from './typographyComponent';


// width: 1440px;
//   height: 1010px;
//   flex-grow: 0;
//   padding: 0 0 25px;
//   background-color: var(--white);

const useStyles = makeStyles((theme) => ({
    grid:{
        width: "178px",
        height: "45px",
        flexGrow: 0,
        padding: "0 0 25px",
        marginTop: "145px",
        textAlign: "left",
        margin: "59px 136px 40px 264px",
        lineHeight: "normal",
        letterSpacing: "normal",
    },
    typographyFont:{
        fontFamily: "CeraPro",
        fontSize: "36px",
        fontWeight: "bold",
        fontStretch: "normal",
    }
}))


export default function MyLibrary(props){
    const classes = useStyles();
    return(
        <Grid className = { classes.grid}>
            <Typography variant = "h4" className={ classes.typographyFont }>
                My Library
            </Typography>
        </Grid>
    );
}