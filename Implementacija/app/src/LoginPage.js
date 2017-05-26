import React, { Component } from 'react';

import './css/LoginPage.css';




class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state = {username: '', password: ''};
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  onChangePassword(event){
  	this.setState({password: event.target.value});
  }
  onChangeUsername(event){
  	this.setState({username: event.target.value});
  }


  	onLogin(){
  			this.props.onLoginSubmit(this.state);
  	}

  render() {
    return (
      <div>
        <div className="LoginPage container-fluid">
          <div className="row">
            <div className="naslov text-center">
              <h1>Univerzitet u Sarajevu</h1>
              <h2>Studentski portal</h2>
              <img className="logo-welcome" src={require('./img/unsa.png')} alt="UNSA Logo"/>
            </div>
          </div>


          <div className="row text-center">

             <form className="v-center form-horizontal col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 "
                    >

                <div className="login-input-wrapper">
                  <div className="form-group has-feedback">
                      <input className=" colors login-input" placeholder="Korisničko ime" onfocus="{this.placeholder = ''}" onblur="{this.placeholder = 'Korisničko ime'}"
                          type="text" onChange={this.onChangeUsername} />
                      <i className="glyphicon glyphicon-user form-control-feedback pull-left" aria-hidden="true" />
                  </div>
                  <div className="form-group has-feedback">
                      <input className="colors login-input" placeholder="Lozinka" onfocus="{this.placeholder = ''}" onblur="{this.placeholder = 'Lozinka'}"
                          type="password" onChange={this.onChangePassword}/>
                      <i className="glyphicon glyphicon-lock form-control-feedback pull-left" aria-hidden="true" />
                  </div>
               </div>
                {this.props.poruka
              ? <div className="v-center">
                <div>
                  <h5 className="error-login">Prijava nije uspjela.</h5>
                </div>
              </div>
              :
              null
              }
                <div className="form-group">
                  <button type="button" className="btn btn-primary btn-outline btn-login" onClick={this.onLogin}>PRIJAVITE SE</button>
                </div>

              </form>
          </div>

          
        </div>
      </div>
    );
  }
}

export default LoginPage;
