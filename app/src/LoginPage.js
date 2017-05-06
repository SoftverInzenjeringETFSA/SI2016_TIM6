import React, { Component } from 'react';
import './LoginPage.css';


class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="background">
          <div className="layer">
          </div>
        </div>

        <div className="LoginPage container-fluid">
          <div className="row long30">
            <div className="naslov">
              <h1>Univerzitet u Sarajevu</h1>
              <h2>Studentski portal</h2>
            </div>
          </div>
          <div className="row kriticni">
            <div className="col-sm-8">
              <img className="logo-unsa" src={require('./img/unsa.png')} />
            </div>
            <div className="col-sm-3">

              <form className="form-horizontal" onSubmit={() => this.props.onLoginSubmit()}>
                <div className="form-group">
                  
                  <div className="col-sm-12">
                    <input type="text" className="form-control" placeholder="Ime"/>
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-sm-12">
                    <input type="password" className="form-control" placeholder="Password"/>
                  </div>
                </div>
      
                <div className="form-group">
                  <div className="col-xs-8"></div>

                  <div className="col-xs-3">
                    <input type="submit" className="btn btn-primary" value="Prijava" />
                    </div>
                  </div>
              </form>

            </div>
            <div className="col-sm-2"></div>
          </div>

          <div className="dno row">
            <div className="col-sm-1"></div>
            <div className="col-sm-1"><h2>ISSS</h2></div>
            <div className="col-sm-6"></div>
            <div className="col-sm-4"><h2>Univerzitet u Sarajevu</h2></div>

          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
