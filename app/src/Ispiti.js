import React, { Component } from 'react';
import './css/Ispiti.css';


class Ispiti extends Component {
  render() {
    return (
    	<div>
			<h1 className="main-naslov">Termini ispita:</h1>

			<h2 className="podnaslov">Objavljeni termini ispita:</h2>
			<table className="table table-striped">
				<tbody>
  				<tr><th>Predmet</th><th>Termin</th><th></th></tr>
  				<tr><td>Matematika</td><td>12.5. 15:30</td><td>Popunjen</td></tr>
  				<tr><td>Matematika</td><td>12.5. 15:30</td><td>Popunjen</td></tr>
  				<tr><td>Matematika</td><td>12.5. 15:30</td><td>Popunjen</td></tr>
  				<tr><td>Matematika</td><td>12.5. 15:30</td><td>Popunjen</td></tr>
				</tbody>
			</table>

      <h2 className="podnaslov">Termini na koje ste prijavljeni:</h2>
      <table className="table table-striped">
        <tbody>
          <tr><th>Predmet</th><th>Termin</th><th></th></tr>
          <tr><td>Matematika</td><td>12.5. 15:30</td><td>Popunjen</td></tr>
          <tr><td>Matematika</td><td>12.5. 15:30</td><td>Popunjen</td></tr>
        </tbody>
      </table>

      <h2 className="podnaslov">Historija prijavljenih ispita:</h2>
      <table className="table table-striped">
        <tbody>
          <tr><th>Predmet</th><th>Termin</th><th></th></tr>
          <tr><td>Matematika</td><td>12.5. 15:30</td><td>Popunjen</td></tr>
          <tr><td>Matematika</td><td>12.5. 15:30</td><td>Popunjen</td></tr>
          <tr><td>Matematika</td><td>12.5. 15:30</td><td>Popunjen</td></tr>
          <tr><td>Matematika</td><td>12.5. 15:30</td><td>Popunjen</td></tr>
        </tbody>
      </table>
		</div>
    );
  }
}

export default Ispiti;