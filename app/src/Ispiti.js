import React, { Component } from 'react';
import './css/Ispiti.css';


class Ispiti extends Component {
  constructor(props){
    super(props);
    this.state = {ispiti: [],
                  prijavljeniIspiti: [],
                };

    this.prijavaIspita = this.prijavaIspita.bind(this);
    this.odjavaIspita = this.odjavaIspita.bind(this);
    this.dohvatiIspite = this.dohvatiIspite.bind(this);
  }

  componentDidMount() {
    this.dohvatiIspite();
  }

  dohvatiIspite(){
    const updatedState = Object.assign({}, this.state);
    
    updatedState.ispiti = [
          {naziv: "Matematika", datum: "12.5.2017.", termin:"12:30", status: "Zauzet", id:1},
          {naziv: "Matematika", datum: "12.5.2017.", termin:"13:00", status: "Zauzet", id:2},
          {naziv: "Fizika", datum: "13.5.2017.", termin:"12:30", status: "Slobodan", id:3},
          {naziv: "Elektrotehnika", datum: "12.5.2017.", termin:"14:00", status: "Odabran drugi", id:4},
          {naziv: "Elektrotehnika", datum: "12.5.2017.", termin:"14:30", status: "Odabran drugi", id:5},
          {naziv: "Elektrotehnika", datum: "12.5.2017.", termin:"15:00", status: "Odabran drugi", id:6},
          ];

    updatedState.prijavljeniIspiti = [];

    this.setState(updatedState);
  }

  prijavaIspita(ispitId){
    const foundIndex = this.state.ispiti.findIndex(x => x.id === ispitId);
    const ispitiNext = this.state.ispiti.filter(x => x.id !== ispitId);
    const prijavljeniIspitiNext = [this.state.ispiti[foundIndex], ...this.state.prijavljeniIspiti];

    this.setState({ispiti: ispitiNext, prijavljeniIspiti: prijavljeniIspitiNext});
  }

  odjavaIspita(ispitId){
    const foundIndex = this.state.prijavljeniIspiti.findIndex(x => x.id === ispitId);
    const prijavljeniIspitiNext = this.state.prijavljeniIspiti.filter(x => x.id !== ispitId);
    const ispitiNext = [this.state.prijavljeniIspiti[foundIndex], ...this.state.ispiti];

    this.setState({ispiti: ispitiNext, prijavljeniIspiti: prijavljeniIspitiNext});
  }

  render() {
    const ispiti = this.state.ispiti.map((i) => (
      <tr key={i.id}><td>{i.naziv}</td><td>{i.datum}</td><td>{i.termin}</td><td>{i.status != "Slobodan"? i.status : <button className="btn btn-primary btn-xs" onClick={() => this.prijavaIspita(i.id)}>Prijavi</button>}</td></tr>
    ));

    const prijavljeniIspiti = this.state.prijavljeniIspiti.map((i) => (
      <tr key={i.id}><td>{i.naziv}</td><td>{i.datum}</td><td>{i.termin}</td><td>{<button className="btn btn-primary btn-xs" onClick={() => this.odjavaIspita(i.id)}>Odjavi</button>}</td></tr>
    ));

    return (
    	<div>
      {this.state.ispiti.length > 0
        ? <div>
  			<h1 className="main-naslov">Termini ispita</h1>
  			<h2 className="podnaslov">Objavljeni termini ispita:</h2>
  			<table className="table table-striped">
  				<tbody>
    				<tr><th>Predmet</th><th>Datum</th><th>Termin</th><th></th></tr>
            {ispiti}
  				</tbody>
  			</table>
      </div>
      : <h3>Trenutno nema otvorenih termina.</h3>
      }

      {this.state.prijavljeniIspiti.length > 0
       ? <div><h2 className="podnaslov">Termini na koje ste prijavljeni:</h2>
          <table className="table table-striped">
            <tbody>
              <tr><th>Predmet</th><th>Datum</th><th>Termin</th><th></th></tr>
              {prijavljeniIspiti}
            </tbody>
          </table>
          </div>
          :<h3>Niste prijavili nijedan ispit.</h3>
      }
		</div>
    );
  }
}

export default Ispiti;