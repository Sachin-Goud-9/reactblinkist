import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import TypographyComponent from './typographyComponent';


const useStyles = makeStyles((theme) => ({
    grid:{
        width: "912px",
        height: "160px",
        padding: "16px 16px 30px",
        marginTop: "40px",
        marginRight: "40px",
        marginBottom: "60px",
        marginLeft: "264px",
        borderRadius: "4px",
        textAlign: "left",
        backgroundColor: "#fff288"
    }
}))

export default function DownloadApp(props){
    const classes = useStyles();
    return(
        <Grid className = { classes.grid }>
            <Typography variant="p" color="error">
                New 
            </Typography>
            <br></br>
            <Typography variant="p" style={{fontWeight: "bold", marginTop: "4px", marginRight: "349px", marginBottom: "16px"}}>
                Find audiobooks on the Blinkist app
            </Typography>
            <br></br>
            <Typography variant="p" style={{margin: "16px 95px 13px 0"}}>
            With Premium you’ll get the whole Blinkist library for free, plus full-length nonfiction audiobooks at a special member price.
            </Typography>
        </Grid>
    );
}