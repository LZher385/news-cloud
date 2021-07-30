import React,{useState} from "react";
import {
  Box,
  Switch,
  AppBar,
  Typography,
  Toolbar,
  Container,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";

import Home from "./components/Home";
import About from "./components/About";
import useStyles from "./styles";

function App() {

  const [light, setLight] = useState(1);
  const classes = useStyles();
  const theme = createMuiTheme({
    shadows: ["none"],
    typography: {
      fontFamily: "Fira Sans",
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
    palette: {
      primary: {
        main: light?'#FFFFFF':'#000000'
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
        <Box style={{display:'flex',flexDirection:'row'}} position="static">
            <Box style={{display:'flex',flex:1,flexDirection:'row',alignItems:'center'}}>
              <LanguageIcon color={light?'black':'white'} fontSize="large" />
              <Typography
                variant="h3"
                style={{fontWeight: "bold",color:light?'black':'white'}}
              >
                News_Cloud
              </Typography>
            </Box>
            <Box style={{display:'flex',flex:1,flexDirection:'row',justifyContent:'flex-end',alignItems:'flex-end'}}>
              <Typography style={{height:'50%',width:'20%',bcolor:light?'lack':'white'}}>Dark mode</Typography>
              <Switch style={{flex:1}} onChange={() => setLight(!light)}/>
            </Box>
        </Box>
        <Box style={{backgroundColor:light?'#FFFFFF':'#000000'}}>
          <Home />
          <About light={light}/>
        </Box>
    </ThemeProvider>
  );
}

export default App;
