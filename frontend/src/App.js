import React from "react";
import {
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
  const classes = useStyles();
  const theme = createMuiTheme({
    typography: {
      fontFamily: "Fira Sans",
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
    palette: {
      primary: {
        main: "#012641",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar position="static" className={classes.navbar}>
          <Toolbar className={classes.toolbar}>
            <LanguageIcon color="primary" fontSize="large" />
            <Typography
              variant="h3"
              component="h1"
              color="primary"
              className={classes.title}
            >
              News_Cloud
            </Typography>
          </Toolbar>
        </AppBar>
        <div>
          <Home />
          <About />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
