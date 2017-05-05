import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './LoginPage';
import Main from './Main';
import Obavjestenja from './Obavjestenja';
import Predmeti from './Predmeti';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LoginPage}/>
          <Route path="/obavjestenja" component={Main}/>
          <Route path="/ispiti" component={Main}/>
          <Route path="/profil" component={Main}/>
          <Route path="/predmeti" component={Main}/>

        </div>

      </Router>
    );

/*    return (
      <div>
      <div className="background">
        <div className="layer">
        </div>
      </div>
      <LoginPage /> </div>

    );*/

/*    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );*/
  }
}

export default App;
