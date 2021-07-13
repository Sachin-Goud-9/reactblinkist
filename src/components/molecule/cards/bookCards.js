import { Button, Card, CardContent, CardMedia, CardActions, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import TypographyComponent from '../../atoms/typographyComponent';
import {AccessTime} from '@material-ui/icons';
import { useDispatch } from "react-redux";
import { readingBooks } from '../../../store/actions'



const useStyles = makeStyles((theme) => ({
    grid:{
        textAlign: "left",
        margin: "59px 136px 40px 264px",
    },
    cardStyle:{
        width: "284px",
        height: "600px",
        borderRadius: "8px",

    },
    image:{
        width: "500px",
        height: "350px"
    }
}))






export default function BookCards(props){
    const classes = useStyles();
    const dispatch = useDispatch();
    return(
        <Card className = "root">
            <CardMedia
                className = { classes.image }
                image = { props.book.bookImage } />

            <CardContent>
                <Grid>
                    <Typography variant = "p" style = {{ fontWeight: "bold" }}>
                        { props.book.bookTitle }
                    </Typography>
                </Grid>
                <Grid>
                    <Typography variant="p">
                        { props.book.bookAuthor }
                    </Typography>
                </Grid>
                <Grid>
                    <IconButton>
                        <AccessTime></AccessTime>
                    </IconButton>
                    <Typography variant="p">
                        { props.book.timeToRead }
                    </Typography>
                </Grid>
            </CardContent>
            <Grid item>
                <CardActions>
                    {!props.disable && (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => 
                                dispatch(readingBooks(props.book))}
                        >
                            Finished
                        </Button>
                    )}
                </CardActions>
            </Grid>
        </Card>
        
    );
}