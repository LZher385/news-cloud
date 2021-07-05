import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import { AppBar, Typography, Toolbar } from "@material-ui/core";

//pages
import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/Error";
// navbar

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h2">News Cloud</Typography>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
