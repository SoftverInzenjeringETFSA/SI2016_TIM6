import React, { Component } from 'react';
import './css/Main.css';

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

    var lipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus fringilla erat."
      + "Nullam eros leo, euismod et erat ut, congue tristique est. Sed eu varius lorem." 
      + "Nam semper ex sapien, non porttitor sem scelerisque mattis. Sed imperdiet arcu in viverra interdum."
      + "Nunc id leo imperdiet turpis maximus condimentum ut quis odio.";

    this.state = {
        obavijesti: [
          {naslov: "Et pluribus Unum", tekst: lipsum},
          {naslov: "Et pluribus Unum", tekst: lipsum},
          {naslov: "Et pluribus Unum", tekst: lipsum},
          {naslov: "Et pluribus Unum", tekst: lipsum}
        ],
        user: {
          ime: "Mujo", 
          prezime: "Mujić", 
          jmbg: "1234567890123", 
          spol: "m", 
          adresa: "Alije Izetbegovica 91", 
          mjesto: "Zenica", 
          telefon: "061123456", 
          email: "mmujic@outlook.com"
        }
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
        <div className="content-container">

          <nav className="navbar navbar-default navbar-fixed-top topbar navigation-color">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand logo"><strong>ISSS</strong>&nbsp;Studentska stranica</a>
              </div>
              <div className="collapse navbar-collapse">
                <p className="navbar-text navbar-right">
                  Dobrodošli,&nbsp;
                  <a href="#" className="navbar-link">{this.state.user.ime}!</a>
                </p>
              </div>
            </div>
          </nav>

          <Router className="container-fluid">        
            <div className="row">
              <div className="col-md-2 sidebar navigation-color">
                <ul className="nav nav-pills nav-stacked">
                  <li role="presentation"><NavLink className="link" to="/predmeti" activeClassName="active">Predmeti</NavLink></li>
                  <li role="presentation"><NavLink className="link" to="/obavjestenja" activeClassName="active">Obavjestenja</NavLink></li>
                  <li role="presentation"><NavLink className="link" to="/ispiti" activeClassName="active">Ispiti</NavLink></li>
                  <li role="presentation"><NavLink className="link" to="/profil" activeClassName="active">Profil</NavLink></li>
                  <li role="presentation"><a href="/" className="link">Odjava</a></li>
                </ul>
              </div>

              <div className="col-md-10 col-md-offset-10 content background-color">
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
