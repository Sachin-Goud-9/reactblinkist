export default function validate(){
    var bookIm = document.getElementById('image');
    var bookAu = document.getElementById('title');
    var bookTi = document.getElementById('title');
    var bookTim = document.getElementById('time');
    console.log("in Validate Form")
    if(bookIm===""){
        alert("Image Cannot be Empty.");
        return true;
    }
    if(bookAu===""){
        alert("Author Cannot be Empty.");
        return true;
    }
    if(bookTi===""){
        alert("Title Cannot be Empty.");
        return true;
    }
    if(bookTim===""){
        alert("Time Cannot be Empty.");
        return true;
    }
}