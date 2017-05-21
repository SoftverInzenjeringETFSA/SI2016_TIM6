import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import Main from './Main';
import Error from './Error';

import {makeCancelable, PATH_BASE,  PATH_LOGIN, PATH_STUDENT, PATH_STUDENT_PROFILE, PATH_STUDENT_PASSWORD} from './globals';

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
                  token: '',
                  poruka: null,
                  poruka1: null
                };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.onProfileSubmit = this.onProfileSubmit.bind(this);
    this.onProfileCreate= this.onProfileCreate.bind(this);

    this.request = null;
  }

  logout(){

    this.setState({ulogovan: false, user: {}, token: ''});
    this.render();
  }

  login(st){

    this.request=makeCancelable(fetch(`${PATH_BASE}${PATH_LOGIN}`,{
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: st.username,
    password: st.password,
  })
}));

  this.request.promise.then(response => { if (response.status== 200)
    {
      this.setState({token: response.headers.get("Authorization")},this.onProfileCreate)
    }
    else {
      this.setState({poruka: "P"});
    }
  }
).catch(error => this.setState({poruka: "P"}));

  }

  onProfileCreate()
  {

    this.request=makeCancelable(fetch(`${PATH_BASE}${PATH_STUDENT}${PATH_STUDENT_PROFILE}`,{
   method: 'GET',
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
     'Authorization': this.state.token
   }
   }));

    this.request.promise.then(response => response.json())
                     .then(result => this.setState({user: result, ulogovan: true})).catch(error => this.setState({errorMessage: error + ""}));
  }


  onProfileSubmit(stat){
    this.request=makeCancelable(fetch(`${PATH_BASE}${PATH_STUDENT}${PATH_STUDENT_PASSWORD}`,{
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': this.state.token
  },
  body: JSON.stringify({
    password1: stat.sifra1,
    password2: stat.sifra2,
    password: stat.sifra,
  })
}));

  this.request.promise.then(response => { if (response.status== 200)
    {
      this.setState({poruka1: "Y"});
      this.onProfileCreate();
    }
    else {
      this.setState({poruka1: "N"});
    }
  }
).catch(error =>
  {
    this.setState({poruka1: "N"});
  });

}


  render() {
    const noviLoginPage = () => <LoginPage onLoginSubmit={this.login} poruka={this.state.poruka}/>
    const noviMainPage = () => <Main onLogout={this.logout} user={this.state.user} token={this.state.token} onProfileSubmit={this.onProfileSubmit} poruka1={this.state.poruka1}/>

    return (
      <Router>
        <div>
          {this.state.ulogovan ? <Redirect from="/" to="obavjestenja" /> : <Route exact path="/" component={noviLoginPage} /> }
          <PrivateRoute path="/obavjestenja" component={noviMainPage} ulogovanost={this.state.ulogovan} />
          <PrivateRoute path="/ispiti" component={noviMainPage} ulogovanost={this.state.ulogovan}/>
          <PrivateRoute path="/profil" component={noviMainPage} ulogovanost={this.state.ulogovan}/>
          <PrivateRoute path="/predmeti" component={noviMainPage} ulogovanost={this.state.ulogovan}/>
        </div>

      </Router>);
    }
  }

export default App;
