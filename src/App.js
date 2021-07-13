import logo from './logo.svg';
import './App.css';
import { Grid, makeStyles } from '@material-ui/core';
// import TypographyComponent from './atoms/typographyComponent';
import AppBarComponent from './components/organisms/library/appBarComponent'
import BodyUptoCards from './components/organisms/library/bodyUptoCards';
import TabsForReading from './components/organisms/library/TabsForReading';


const useStyles = makeStyles((theme) => ({
  grid:{
    marginTop:theme.spacing(15),
    marginLeft: theme.spacing(3),
    textAlign: "left",
  }
}))

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <AppBarComponent/>
      <BodyUptoCards/>
      {/* <BookCards/> */}
      <TabsForReading/>
    </div>
  );
}

export default App;