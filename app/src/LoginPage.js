import React, { Component } from 'react';
import './css/LoginPage.css';


class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state = {};
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
                    onSubmit={() => this.props.onLoginSubmit()}>
                    
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Ime"/>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Prezime"/>
                </div>
      
                <div className="form-group">
                    <input type="submit" className="btn btn-primary" value="Prijava" />
                </div>
              </form>
          </div>

          <div className="navbar-fixed-bottom dno row">
            <div className="hidden-xs col-sm-10 col-sm-offset-1">
              <h1 className="footer-wrapper">
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
