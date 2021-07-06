import React from "react";
import { AppBar, Typography, Toolbar } from "@material-ui/core";

import Home from "./components/Home";
import About from "./components/About";
import useStyles from "./styles";

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h2">News Cloud</Typography>
        </Toolbar>
      </AppBar>
      <Home />
      <About />
    </div>
  );
}

export default App;
