// import { makeStyles, Tab, Tabs, Box, Typography, Grid } from '@material-ui/core';
// import React, { useState } from 'react';
// import PropTypes from 'prop-types';



// const useStyles = makeStyles((theme) => ({
//     tabs:{
//         marginLeft: "264px"
//     }
// }));




// function TabPanel(props) {
//     const { children, value, index, ...other } = props;
  
//     return (
//       <div
//         role="tabpanel"
//         hidden={value !== index}
//         id={`scrollable-prevent-tabpanel-${index}`}
//         aria-labelledby={`scrollable-prevent-tab-${index}`}
//         {...other}
//       >
//         {value === index && (
//           <Box p={3}>
//             <Typography>{children}</Typography>
//           </Box>
//         )}
//       </div>
//     );
//   }
  
//   TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired,
//   };



// function a11yProps(index) {
//     return {
//       id: `scrollable-prevent-tab-${index}`,
//       'aria-controls': `scrollable-prevent-tabpanel-${index}`,
//     };
//   }








// export default function TabsForReading(props){
//     const classes = useStyles();
//     const [value,setValue] = useState(0);

//     const handleChange = (event, newValue) => {
//         setValue(newValue)
//     }

//     return(
//         <Grid>
//             <Tabs 
//                 value = { value }
//                 onChange = { handleChange }
//                 className = { classes.tabs }
//                 variant = "standard"
//                 textColor = "secondary"
//             >
//                 <Tab label = "Continue Reading" {...a11yProps(0)}/>
//                 <Tab label = "Finished" {...a11yProps(1)}/>
//             </Tabs>
//             <TabPanel value = {value} index = {0} children="hi">
//                 Continue Reading
//             </TabPanel>
//             <TabPanel value = {value} index = {0} children = "bye">
//                 Finished
//             </TabPanel>

//         </Grid>
//     );
// }






import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import BookCards from '../../molecule/cards/bookCards';
import { useSelector } from "react-redux";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  tabBar: {
    border: 0,
    boxShadow: "none",
  },
}));

export default function TabsWrappedLabel() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const state = useSelector((state => state.books))
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid className={classes.root}>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          aria-label="simple tabs example"

          >
          <Tab
            label="Currently Reading"
            {...a11yProps('one')}
          />
          <Tab 
            label="Finished" 
            {...a11yProps('two')} 
          />
        </Tabs>
      <TabPanel value={value} index={0}>
          <Grid container direction = "row" spacing = {3}>
            {state.readingBooks.map((item) => (
              <Grid item>
                <BookCards book = { item } disable = { false } />
              </Grid>
            ))}
          </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
          <Grid container direction = "row" spacing = {3}>
            {state.finishedBooks.map((item) => (
              <Grid item>
                <BookCards book = { item } disable = { true } />
              </Grid>
            ))}
          </Grid>
      </TabPanel>      
    </Grid>
  );
}
