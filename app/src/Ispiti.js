import React, { Component } from 'react';
import './css/Ispiti.css';


class Ispiti extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    const ispiti = this.props.ispiti.map((i) => (
      <tr key={i.id}><td>{i.naziv}</td><td>{i.datum}</td><td>{i.termin}</td><td>{i.status != "Slobodan"? i.status : <button className="btn btn-primary btn-xs" onClick={() => this.props.onPrijava(i.id)}>Prijavi</button>}</td></tr>
    ));

    const prijavljeniIspiti = this.props.prijavljeniIspiti.map((i) => (
      <tr key={i.id}><td>{i.naziv}</td><td>{i.datum}</td><td>{i.termin}</td><td>{<button className="btn btn-primary btn-xs" onClick={() => this.props.onOdjava(i.id)}>Odjavi</button>}</td></tr>
    ));

    return (
    	<div>
      {this.props.ispiti.length > 0
        ? <div>
  			<h1 className="main-naslov">Termini ispita:</h1>
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

      {this.props.prijavljeniIspiti.length > 0
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

      <h2 className="podnaslov">Historija prijavljenih ispita:</h2>
		</div>
    );
  }
}

export default Ispiti;