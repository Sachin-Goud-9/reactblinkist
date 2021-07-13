import { Grid } from '@material-ui/core';
import React from 'react';
import DownloadApp from '../../atoms/downloadapp';
import MyLibrary from '../../atoms/mylibrary';
import AddButton from '../../molecule/addBook/addBookButton'

export default function BodyUptoCards(props){
    return(
        <Grid>
            <MyLibrary></MyLibrary>
            <DownloadApp/>
            <AddButton></AddButton>
        </Grid>
    );
}