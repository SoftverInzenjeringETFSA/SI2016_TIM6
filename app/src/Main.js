import React, { Component } from 'react';
import './Main.css';
import Obavjestenja from './Obavjestenja';
import Ispiti from './Ispiti';
import Profil from './Profil';
import Predmeti from './Predmeti';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

class Main extends Component {
  render() {
    return (
        <div className="sve">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand">ISSS Studentska stranica</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li><a>Dobro došli, Mujo!</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <Router className="sve">        
        <div className="row sve">
          <div className="col-md-3">

            <ul className="nav nav-pills nav-stacked">
            <li role="presentation"><NavLink className="link" to="/predmeti" activeClassName="active">Predmeti</NavLink></li>
            <li role="presentation"><NavLink className="link" to="/obavjestenja" activeClassName="active">Obavjestenja</NavLink></li>
            <li role="presentation"><NavLink className="link" to="/ispiti" activeClassName="active">Ispiti</NavLink></li>
            <li role="presentation"><NavLink className="link" to="/profil" activeClassName="active">Profil</NavLink></li>
            <li role="presentation"><a href="/" className="link">Odjava</a></li>
            </ul>

          </div>

          <div className="col-md-9 sadrzaj">
            <Route path="/obavjestenja" component={Obavjestenja}/>
            <Route path="/ispiti" component={Ispiti}/>
            <Route path="/profil" component={Profil}/>
            <Route path="/predmeti" component={Predmeti}/>
          </div>
        </div>
        </Router>
        </div>
    );
  }
}

export default Main;
