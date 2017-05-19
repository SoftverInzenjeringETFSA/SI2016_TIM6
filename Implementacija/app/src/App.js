import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import Main from './Main';

import {makeCancelable, PATH_BASE,  PATH_LOGIN, PATH_STUDENT, PATH_STUDENT_FIND, PARAM_STUDENT_STUDENT} from './globals';

import LoginPage from './LoginPage';

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
    this.state = {ulogovan: false,
                  user: {},
                  token: ""
                };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.onProfileSubmit = this.onProfileSubmit.bind(this);

    this.request = null;
  }

  logout(){
    this.setState({ulogovan: false, user: {}});
  }

  login(){

    //this.request = makeCancelable(fetch(`${PATH_BASE}${PATH_STUDENT}${PATH_STUDENT_FIND}?${PARAM_STUDENT_STUDENT}1`));

    this.request=makeCancelable(fetch(`${PATH_BASE}${PATH_LOGIN}`,{
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: 'alija1',
    password: '123123',
  })
}));
//this.request.promise.then(response => response.headers()).then(Authorization )
  //console.log("rekv: " + `${PATH_BASE}${PATH_STUDENT}${PATH_STUDENT_FIND}?${PARAM_STUDENT_STUDENT}1`);
  this.request.promise.then((response) => console.log(response.headers.get("Authorization")));

  //  this.request.promise.then(response => response.json())
    //                    .then(result => this.setState({user: result, ulogovan: true}));
  }

  onProfileSubmit(nextProfileState){
    this.setState(nextProfileState);
    return true;
  }

  render() {
    const noviLoginPage = () => <LoginPage onLoginSubmit={() => this.login()}/>
    const noviMainPage = () => <Main onLogout={() => this.logout()} user={this.state.user} onProfileSubmit={this.onProfileSubmit}/>

    return (
      <Router>
        <div>
          {this.state.ulogovan? <Redirect from="/" to="obavjestenja" /> : <Route exact path="/" component={noviLoginPage} /> }
          <PrivateRoute path="/obavjestenja" component={noviMainPage} ulogovanost={this.state.ulogovan} />
          <PrivateRoute path="/ispiti" component={noviMainPage} ulogovanost={this.state.ulogovan}/>
          <PrivateRoute path="/profil" component={noviMainPage} ulogovanost={this.state.ulogovan}/>
          <PrivateRoute path="/predmeti" component={noviMainPage} ulogovanost={this.state.ulogovan}/>
        </div>

      </Router>);
    }
  }

export default App;
