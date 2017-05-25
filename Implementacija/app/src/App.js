import React, { Component } from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';
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

    this.state = {ulogovan: reactLocalStorage.get('ulogovan', false),
                  user: {},
                  token: reactLocalStorage.get('token', null),
                  poruka: null,
                };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.onProfileCreate= this.onProfileCreate.bind(this);
    this.request = null;
    if(this.state.token) this.onProfileCreate();

  }

  logout(){
    reactLocalStorage.clear();
    this.setState({ulogovan: false, user: {}, token: '', poruka: null});
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
      this.setState({token: response.headers.get("Authorization"), poruka: null},this.onProfileCreate)
    }
    else {
      this.setState({poruka: "P"});
    }
  }
).catch(error => this.setState({poruka: "P"}));


  }

  onProfileCreate()
  {
    reactLocalStorage.set('token', this.state.token);
    reactLocalStorage.set('ulogovan', true)

    this.request=makeCancelable(fetch(`${PATH_BASE}${PATH_STUDENT}${PATH_STUDENT_PROFILE}`,{
   method: 'GET',
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
     'Authorization': this.state.token
   }
   }));

    this.request.promise.then(response => response.json())
                     .then(result => this.setState({user: result, ulogovan: true})
        ).catch(error => this.setState({errorMessage: error + ""}));

  }


  render() {
    const noviLoginPage = () => <LoginPage onLoginSubmit={this.login} poruka={this.state.poruka}/>
    const noviMainPage = () => <Main onLogout={this.logout} user={this.state.user} token={this.state.token}/>

    return (
      <Router>
        <div>

        <Route exact path="/" render={() => (
  this.state.ulogovan ? (
    <Redirect to="/obavjestenja"/>
  ) : (
    null
  )
)}/>

            <Route exact path="/" component={noviLoginPage} ulogovanost={this.state.ulogovan} />

            <PrivateRoute path="/obavjestenja" component={noviMainPage} ulogovanost={this.state.ulogovan} />
          <PrivateRoute path="/ispiti" component={noviMainPage} ulogovanost={this.state.ulogovan}/>
          <PrivateRoute path="/profil" component={noviMainPage} ulogovanost={this.state.ulogovan}/>
          <PrivateRoute path="/predmeti" component={noviMainPage} ulogovanost={this.state.ulogovan}/>
        </div>

      </Router>);
    }
  }

export default App;
