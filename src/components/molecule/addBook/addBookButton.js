import PropTypes from "prop-types";
import React, { useState } from "react";
import { Grid, TextField, Button, DialogActions, DialogContentText, Divider } from "@material-ui/core";
import { useDispatch } from "react-redux";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles } from "@material-ui/core/styles";
import { addingBook } from "../../../store/actions";
// import validate from './validate.js';


function validate(){
  var bookIm = document.getElementById('image');
    var bookAu = document.getElementById('author');
    var bookTi = document.getElementById('title');
    var bookTim = document.getElementById('time');
    if(bookIm===" "){
        alert("Image Cannot be Empty.");
        return false;
    }
    if(bookAu===" "){
        alert("Author Cannot be Empty.");
        return false;
    }
    if(bookTi===" "){
        alert("Title Cannot be Empty.");
        return false;
    }
    if(bookTim===" "){
        alert("Time Cannot be Empty.");
        return false;
    }
  return true;
}

function bookAdded(){
  if(validate()){
    alert("Book Added.");
    return true;
  }
  else{
    alert("Fields cannot be empty.");
    return false;
  }
}

function SimpleDialog(props) {
  const [book, setbook] = useState({
    bookTitle: "",
    bookAuthor: "",
    timeToRead: "",
  });
  const useStyles = makeStyles({
    form: {
      width: "450px",
      height: "450px",
    },
  });

  const classes = useStyles();
  const aboutBook = (event) => {
    setbook({ ...book, [event.target.name]: event.target.value });
  };
  const dispatch = useDispatch();

  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">BOOK DETAILS</DialogTitle>
      <Divider/>
      <DialogContent>
        <DialogContentText>
        <Grid container spacing={3} direction="column" className={classes.form}>
          {/* <Grid item>
        IMAGE_SOURCE : <input type="text"></input>
      </Grid> */}
          <Grid item>
            <TextField
              id = "image"
              label="Image Url"
              name="bookImage"
              onChange={aboutBook}
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              id = "title"
              label="Title Of The Book"
              name="bookTitle"
              onChange={aboutBook}
              variant="outlined"
            />
          </Grid>

          <Grid item>
            <TextField
              id = "author"
              label="Author Of The Book"
              name="bookAuthor"
              onChange={aboutBook}
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              id = "time"
              label="Time To Read The Book"
              name="timeToRead"
              onChange={aboutBook}
              variant="outlined"
            />
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                dispatch(addingBook(book));
                 handleClose();
                }}
            >
              Add Book
            </Button>
          </Grid>
        </Grid>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
      <Button autoFocus onClick={handleClose} color="primary">
            Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function AddButton() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <Grid>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        ADD BOOK
      </Button>
      <SimpleDialog open={open} onClose={handleClose} />
    </Grid>
  );
}
