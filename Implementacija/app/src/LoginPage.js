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
            </div>
          </div>

          <div className="row">
              <div className="hidden-xs hidden-sm col-md-4 col-md-offset-1">
                <img className="v-center" src={require('./img/unsa.png')} alt="UNSA Logo"/>
              </div>

              <form className="v-center form-horizontal col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 col-md-3 col-md-offset-3"
                    >

                <div className="form-group">
                    <input type="text" className="form-control" id="username" placeholder="Korisničko ime" onChange={this.onChangeUsername}  />
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" id="password"  placeholder="Šifra" onChange={this.onChangePassword}  />
                </div>

                <div className="form-group">
                  <button type="button" className="btn btn-primary" onClick={this.onLogin}>Prijava</button>
                </div>
              </form>
          </div>

          <div className="navbar-fixed-bottom dno row">
            <div className="hidden-xs col-sm-10 col-sm-offset-1">
              <h1 className="row footer-wrapper">
                <span><strong>ISSS</strong></span><span>Univerzitet u Sarajevu</span>
              </h1>
            </div>
            <div className="hidden-sm hidden-md hidden-lg col-xs-10 col-xs-offset-1">
              <h1 className="text-center"><strong>ISSS</strong></h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
