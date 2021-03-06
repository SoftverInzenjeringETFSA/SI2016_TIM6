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
  NavLink,
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
    this.state =  {};
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout(){
      this.props.onLogout();
  }


  render() {
    const novaObavjestenja = () => <Obavjestenja user={this.props.user} token={this.props.token}/>;
    const novaProfilStranica = () => <Profil user={this.props.user} token={this.props.token}/>;
    const novaIspiti = () => <Ispiti user={this.props.user} token={this.props.token}   ispiti={this.state.ispiti} prijavljeniIspiti={this.state.prijavljeniIspiti} onPrijava={this.prijavaIspita} onOdjava={this.odjavaIspita}/>;
    const novaPredmeti = () => <Predmeti user={this.props.user}  token={this.props.token} />;
    navigationItems[4] =   (<NavLink className="link" to="/" activeClassName="active">
        <SidebarItem onClick={this.onLogout}>
          <span className="nav-title" >Odjava</span>
        </SidebarItem>
      </NavLink> );


    return (
        <div className="body">
          <nav className="navbar navbar-default" role="navigation">
              <div className="main-navigation-container">
                <div className="navbar-header">
                  <a className="navbar-brand logo white-text">
                    <div className="row">
                    <img className="logo-navbar" src={require('./img/unsa.png')} alt="Sliku nije moguće prikazati"/>
                    <h2 className="logo-title">Studentski portal</h2>
                    </div>
                  </a>
                </div>
                <div className="collapse navbar-collapse">
                  <p className="navbar-text navbar-right white-text">
                    Dobrodošli,&nbsp;
                    <NavLink className="navbar-link white-text" to="/profil">{this.props.user.ime}!</NavLink>
                  </p>
                </div>
              </div>
          </nav>

          <Router>
            <div id="main-content-wrapper">
              <Sidebar content={navigationItems}
                color="#f5f5f5"
                background="#73A2A6"
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
