import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import App from './App';
import Error from './Error';


import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

class Logout extends Component {
  constructor(){
    super();
    this.state = {};
    this.onLogout();
  }

  onLogout(){
console.log("something");
  this.props.onLogout();
  }

  render() {
    this.onLogout();
    return null
  }
}

export default Logout;
