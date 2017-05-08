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
          {id:1, naslov: "Et pluribus Unum", tekst: lipsum},
          {id:2, naslov: "Et pluribus Unum", tekst: lipsum},
          {id:3, naslov: "Et pluribus Unum", tekst: lipsum},
          {id:4, naslov: "Et pluribus Unum", tekst: lipsum}
        ],
        user: {
          ime: "Mujo", 
          prezime: "Mujić", 
          jmbg: "1234567890123", 
          spol: "m", 
          adresa: "Alije Izetbegovica 91", 
          mjesto: "Zenica", 
          telefon: "061123456", 
          email: "mmujic@outlook.com",
          semestar: 2
        },

        ispiti: [
          {naziv: "Matematika", datum: "12.5.2017.", termin:"12:30", status: "Zauzet", id:1},
          {naziv: "Matematika", datum: "12.5.2017.", termin:"13:00", status: "Zauzet", id:2},
          {naziv: "Fizika", datum: "13.5.2017.", termin:"12:30", status: "Slobodan", id:3},
          {naziv: "Elektrotehnika", datum: "12.5.2017.", termin:"14:00", status: "Odabran drugi", id:4},
          {naziv: "Elektrotehnika", datum: "12.5.2017.", termin:"14:30", status: "Odabran drugi", id:5},
          {naziv: "Elektrotehnika", datum: "12.5.2017.", termin:"15:00", status: "Odabran drugi", id:6},
          ],

          prijavljeniIspiti: [],

    };

    this.onProfileSubmit = this.onProfileSubmit.bind(this);
    this.prijavaIspita = this.prijavaIspita.bind(this);
    this.odjavaIspita = this.odjavaIspita.bind(this);
  }

  onProfileSubmit(nextProfileState){
    this.setState(nextProfileState);
  }

  prijavaIspita(ispitId){
    const foundIndex = this.state.ispiti.findIndex(x => x.id === ispitId);
    const ispitiNext = this.state.ispiti.filter(x => x.id !== ispitId);
    const prijavljeniIspitiNext = [this.state.ispiti[foundIndex], ...this.state.prijavljeniIspiti];

    this.setState({ispiti: ispitiNext, prijavljeniIspiti: prijavljeniIspitiNext});

    //TODO
  }


  odjavaIspita(ispitId){
    const foundIndex = this.state.prijavljeniIspiti.findIndex(x => x.id === ispitId);
    const prijavljeniIspitiNext = this.state.prijavljeniIspiti.filter(x => x.id !== ispitId);
    const ispitiNext = [this.state.prijavljeniIspiti[foundIndex], ...this.state.ispiti];

    this.setState({ispiti: ispitiNext, prijavljeniIspiti: prijavljeniIspitiNext});

    //TODO
  }

  render() {
    const novaObavjestenja = () => <Obavjestenja user={this.state.user} obavijesti={this.state.obavijesti}/>
    const novaProfilStranica = () => <Profil user={this.state.user} onProfileSubmit={this.onProfileSubmit}/>
    const novaIspiti = () => <Ispiti user={this.state.user} ispiti={this.state.ispiti} prijavljeniIspiti={this.state.prijavljeniIspiti} onPrijava={this.prijavaIspita} onOdjava={this.odjavaIspita}/>
    const novaPredmeti = () => <Predmeti user={this.state.user}/>

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
                  <li role="presentation"><NavLink className="link" to="/obavjestenja" activeClassName="active">Obavještenja</NavLink></li>
                  <li role="presentation"><NavLink className="link" to="/ispiti" activeClassName="active">Ispiti</NavLink></li>
                  <li role="presentation"><NavLink className="link" to="/profil" activeClassName="active">Profil</NavLink></li>
                  <li role="presentation"><a href="/" className="link">Odjava</a></li>
                </ul>
              </div>

              <div className="col-md-10 col-md-offset-10 content background-color">
                <Route path="/obavjestenja" component={novaObavjestenja}/>
                <Route path="/ispiti" component={novaIspiti}/>
                <Route path="/profil" component={novaProfilStranica}/>
                <Route path="/predmeti" component={novaPredmeti}/>
              </div>
            </div>
          </Router>
        </div>
    );
  }


}


export default Main;
