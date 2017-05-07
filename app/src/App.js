import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import Main from './Main';

import LoginPage from './LoginPage';
import Obavjestenja from './Obavjestenja';
import Predmeti from './Predmeti';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ulogovanost, ...rest }) => (
  <Route {...rest} render={props => (
    ulogovanost ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>);

class App extends Component {
  constructor(){
    super();
    this.state = {ulogovan: false};

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  logout(){
    this.setState({ulogovan: false});
  }

  login(){
    this.setState({ulogovan: true});
  }

  render() {
    const noviLoginPage = () => <LoginPage onLoginSubmit={() => this.login()}/>

    return (
      <Router>
        <div>
          {this.state.ulogovan? <Redirect from="/" to="obavjestenja" /> : <Route exact path="/" component={noviLoginPage} /> }
          <PrivateRoute path="/obavjestenja" component={Main} ulogovanost={this.state.ulogovan} />
          <PrivateRoute path="/ispiti" component={Main} ulogovanost={this.state.ulogovan}/>
          <PrivateRoute path="/profil" component={Main} ulogovanost={this.state.ulogovan}/>
          <PrivateRoute path="/predmeti" component={Main} ulogovanost={this.state.ulogovan}/>
        </div>

      </Router>);
    }
  }

export default App;


/*class App extends Component {
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

      </Router>);
    }*/

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
 
 // }
//}
