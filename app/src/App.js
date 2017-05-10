import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import Main from './Main';

import {makeCancelable, PATH_BASE, PATH_STUDENT, PATH_STUDENT_FIND, PARAM_STUDENT_STUDENT} from './globals';

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
                  user: {}
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

    /*this.request = makeCancelable(fetch(`${PATH_BASE}${PATH_STUDENT}${PATH_STUDENT_FIND}?${PARAM_STUDENT_STUDENT}1`));
    
    console.log("rekv: " + `${PATH_BASE}${PATH_STUDENT}${PATH_STUDENT_FIND}?${PARAM_STUDENT_STUDENT}1`);

    this.request.promise.then(response => response.json())
                        .then(result => this.setState({user: result, ulogovan: true}));*/

    this.setState({ulogovan: true,
          user: {
          id: 1,
          ime: "Mujo", 
          prezime: "Mujić", 
          jmbg: "1234567890123", 
          spol: "m", 
          adresa: "Alije Izetbegovica 91", 
          mjesto: "Zenica", 
          telefon: "061123456", 
          email: "mmujic@outlook.com",
          semestar: 2
        }
    });
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
