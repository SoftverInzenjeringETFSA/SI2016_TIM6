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
  constructor(){
    super();
    //this.state = {obavijesti: [{naslov: "abc", tekst: "obavijest broj 1"}, {naslov: "def", tekst: "obavijest broj 2"}, {naslov: "ghi", tekst: "obavijest broj 3"}, {naslov: "jkl", tekst: "obavijest broj 4"}, {naslov: "jkl", tekst: "obavijest broj 4"}, {naslov: "jkl", tekst: "obavijest broj 4"}, {naslov: "jkl", tekst: "obavijest broj 4"}, {naslov: "jkl", tekst: "obavijest broj 4"}, {naslov: "jkl", tekst: "obavijest broj 4"}, {naslov: "jkl", tekst: "obavijest broj 4"}, {naslov: "jkl", tekst: "obavijest broj 4"}, {naslov: "jkl", tekst: "obavijest broj 4"}, {naslov: "jkl", tekst: "obavijest broj 4"}, {naslov: "jkl", tekst: "obavijest broj 4"}, {naslov: "jkl", tekst: "obavijest broj 4"}]};
    this.state = {
      obavijesti: [{naslov: "abc", tekst: "obavijest broj 1"}, {naslov: "def", tekst: "obavijest broj 2"}, {naslov: "ghi", tekst: "obavijest broj 3"}, {naslov: "jkl", tekst: "obavijest broj 4"}],
      user: {ime: "Mujo", prezime: "Mujić", jmbg: "1234567890123", spol: "m", adresa: "Alije Izetbegovica 91", mjesto: "Zenica", telefon: "061123456", email: "mmujic@outlook.com"}
    };

    this.onProfileSubmit = this.onProfileSubmit.bind(this);
  }

  onProfileSubmit(nextProfileState){
    this.setState(nextProfileState);
  }


  render() {
    const novaObavjestenja = () => <Obavjestenja obavijesti={this.state.obavijesti}/>
    const novaProfilStranica = () => <Profil user={this.state.user} onProfileSubmit={this.onProfileSubmit}/>

    return (
        <div className="sve">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand">ISSS Studentska stranica</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li><a>Dobro došli, {this.state.user.ime}!</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <Router className="sve">        
        <div className="row sve">
          <div className="col-md-3 sidebar">
            <ul className="nav nav-pills nav-stacked">
            <li role="presentation"><NavLink className="link" to="/obavjestenja" activeClassName="active">Obavještenja</NavLink></li>
            <li role="presentation"><NavLink className="link" to="/predmeti" activeClassName="active">Pregled predmeta</NavLink></li>
            <li role="presentation"><NavLink className="link" to="/ispiti" activeClassName="active">Prijave ispita</NavLink></li>
            <li role="presentation"><NavLink className="link" to="/profil" activeClassName="active">Profil</NavLink></li>
            <li role="presentation"><a href="/" className="link">Odjava</a></li>
            </ul>

          </div>

          <div className="col-md-9 sadrzaj">
            <Route path="/obavjestenja" component={novaObavjestenja}/>
            <Route path="/ispiti" component={Ispiti}/>
            <Route path="/profil" component={novaProfilStranica}/>
            <Route path="/predmeti" component={Predmeti}/>
          </div>
        </div>
        </Router>
        </div>
    );
  }


}


export default Main;
