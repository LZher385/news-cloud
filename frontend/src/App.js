import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

//pages
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error'
// navbar
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
