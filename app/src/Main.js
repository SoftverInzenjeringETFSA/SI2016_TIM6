import React, { Component } from 'react';
import './css/Main.css';
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';

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


// Sidebar Navigation Items
const navigationItems = [
  <NavLink className="link" to="/obavjestenja" activeClassName="active">
    <SidebarItem>
      <span className="nav-title">Obavještenja</span>
    </SidebarItem>
  </NavLink>,
  <NavLink className="link" to="/predmeti" activeClassName="active">
    <SidebarItem>
      <span className="nav-title">Predmeti</span>
    </SidebarItem>
  </NavLink>,
  <NavLink className="link" to="/ispiti" activeClassName="active">
    <SidebarItem>
      <span className="nav-title">Termini ispita</span>
    </SidebarItem>
  </NavLink>,
  <NavLink className="link" to="/profil" activeClassName="active">
    <SidebarItem>
      <span className="nav-title">Profil</span>
    </SidebarItem>
  </NavLink>,
  <NavLink className="link" to="/" activeClassName="active">
    <SidebarItem>
      <span className="nav-title">Odjava</span>
    </SidebarItem>
  </NavLink>,
];


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
        <div className="body">
          <nav className="navbar navbar-default" role="navigation">
              <div className="main-navigation-container">
                <div className="navbar-header">
                  <a className="navbar-brand logo white-text">
                    <strong>ISSS</strong>&nbsp;<span className="hidden-xs">Studentska stranica</span>
                  </a>
                </div>
                <div className="collapse navbar-collapse">
                  <p className="navbar-text navbar-right white-text">
                    Dobrodošli,&nbsp;
                    <NavLink className="navbar-link white-text" to="/profil">{this.state.user.ime}!</NavLink>
                  </p>
                </div>
              </div>
          </nav>

          <Router>
            <div id="main-content-wrapper">
              <Sidebar content={navigationItems}
                color="#f5f5f5"
                background="#347598" 
                width="200">

                <div id="inner-content-wrapper">
                  <Route path="/obavjestenja" component={novaObavjestenja}/>
                  <Route path="/ispiti" component={novaIspiti}/>
                  <Route path="/profil" component={novaProfilStranica}/>
                  <Route path="/predmeti" component={novaPredmeti}/>
                </div>
              </Sidebar>
            </div>
          </Router>
        </div>
    );
  }
}

export default Main;
