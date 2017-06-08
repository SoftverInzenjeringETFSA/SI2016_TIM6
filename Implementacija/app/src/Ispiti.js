import React, { Component } from 'react';
import './css/Ispiti.css';
import Error from './Error';
import {PATH_BASE, PATH_ISPIT, PATH_ISPIT_PRIJAVLJENI_FIND, PATH_PRIJAVA_ISPIT, PATH_ISPIT_NEPRIJAVLJENI_FIND, PATH_ISPIT_HISTORIJA_FIND, PATH_ISPIT_PRIJAVA, PATH_ISPIT_ODJAVA, makeCancelable} from './globals';
const Timestamp = require('react-timestamp');


class Ispiti extends Component {
  constructor(props){
    super(props);
    this.state = {ispiti: [],
                  prijavljeniIspiti: [],
                  historijaIspiti:[],
                  errorMessage: null,
                };

    this.prijavaIspita = this.prijavaIspita.bind(this);
    this.odjavaIspita = this.odjavaIspita.bind(this);
    this.dohvatiIspite = this.dohvatiIspite.bind(this);
    this.request1 = null;
    this.request2 = null;
    this.request3=null;
    this.request = null;
  }

  componentDidMount() {
    this.dohvatiIspite();
  }

  dohvatiIspite(){
        this.request1 = makeCancelable(fetch(`${PATH_BASE}${PATH_ISPIT}${PATH_ISPIT_NEPRIJAVLJENI_FIND}`,{
		   method: 'GET',
		   headers: {
		     'Accept': 'application/json',
		     'Content-Type': 'application/json',
		     'Authorization': this.props.token
		   }
		   }));
        this.request2 = makeCancelable(fetch(`${PATH_BASE}${PATH_ISPIT}${PATH_ISPIT_PRIJAVLJENI_FIND}`,{
		   method: 'GET',
		   headers: {
		     'Accept': 'application/json',
		     'Content-Type': 'application/json',
		     'Authorization': this.props.token
		   }
		   }));
       this.request3 = makeCancelable(fetch(`${PATH_BASE}${PATH_ISPIT}${PATH_ISPIT_HISTORIJA_FIND}`,{
       method: 'GET',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         'Authorization': this.props.token
       }
       }));


        this.request1.promise.then(response => response.json())
          .then(result => this.setState({ispiti: result}))
          .catch(error => this.setState({errorMessage: error + ""}));

        this.request2.promise.then(response => response.json())
          .then(result => this.setState({prijavljeniIspiti: result}))
          .catch(error => this.setState({errorMessage: error + ""}));

        this.request3.promise.then(response => response.json())
            .then(result => this.setState({historijaIspiti: result}))
            .catch(error => this.setState({errorMessage: error + ""}));

  }

  componentWillUnmount(){
    this.request1.cancel();
    this.request2.cancel();
    this.request3.cancel();
  }


  prijavaIspita(ispitId){

    var data = new FormData();
    data.append("ispit", ispitId);
    data.append("student", this.props.user.id);
    data.append("model_attribute","prijava");
    this.request=makeCancelable(fetch(`${PATH_BASE}${PATH_PRIJAVA_ISPIT}${PATH_ISPIT_PRIJAVA}`,{
  method: 'POST',
  headers: {
    'Authorization': this.props.token
  },
  body: data
}));
this.request.promise.then(response => {if (response.status=== 200)

  this.dohvatiIspite();

else {
  response.json().then(text => alert(text.message));
    }
    }
  );
}

  odjavaIspita(ispitId){

    var data = new FormData();
    data.append("ispit",  ispitId);
    data.append("student", this.props.user.id);
    data.append("model_attribute","odjava");

    this.request=makeCancelable(fetch(`${PATH_BASE}${PATH_PRIJAVA_ISPIT}${PATH_ISPIT_ODJAVA}`,{
  method: 'POST',
  headers: {
    'Authorization': this.props.token
  },
  body: data
  }));
  this.request.promise.then(response => {if (response.status=== 200)

    this.dohvatiIspite();
    else {
      response.json().then(text => alert(text.message));
    }
  }
  );
}

  render() {
    const ispiti = this.state.ispiti.map((i) => (
      <tr key={i.id}><td>{i.predmet.naziv}</td><td><Timestamp time={i.prijave_do/1000} format='full'/></td><td><Timestamp time={i.termin/1000} format='full'/></td><td>
      <button className="btn btn-primary btn-xs" onClick={() => this.prijavaIspita(i.id)}>Prijavi</button></td></tr>
    ));

    const prijavljeniIspiti = this.state.prijavljeniIspiti.map((i) => (
      <tr key={i.id}><td>{i.predmet.naziv}</td><td><Timestamp time={i.prijave_do/1000} format='full'/></td><td><Timestamp time={i.termin/1000} format='full'/></td><td>{<button className="btn btn-primary btn-xs" onClick={() => {if(confirm("Da li ste sigurni da želite odjaviti ispit?")) this.odjavaIspita(i.id)}}>Odjavi</button>}</td></tr>
    ));

    const historijaIspiti= this.state.historijaIspiti.map((i) => (
      <tr key={i.id}><td>{i.predmet.naziv}</td><td><Timestamp time={i.prijave_do/1000} format='full'/></td><td><Timestamp time={i.termin/1000} format='full'/></td></tr>
    ));

    if (this.state.errorMessage){
      return (
        <div>
          <h1 className="main-naslov">Termini ispita</h1>
          <Error errorMessage={this.state.errorMessage}/>
        </div>
        );
    }
    return (
    	<div>
        	<div className="row">
			<h1 className="main-naslov">Termini ispita</h1>
			<img className="icon" src={require('./img/ispit.png')} alt="Sliku nije moguće prikazati"/>
			</div>

      {this.state.ispiti.length
        ? <div>
  			<h2 className="podnaslov">Objavljeni termini ispita:</h2>
  			<table className="table table-striped">
  				<tbody>
    				<tr><th>Predmet</th><th>Rok prijave</th><th>Termin</th><th/></tr>
            {ispiti}
  				</tbody>
  			</table>
      </div>
      : <h3>Trenutno nema otvorenih termina.</h3>
      }

      {this.state.prijavljeniIspiti
       ? <div><h2 className="podnaslov">Termini na koje ste prijavljeni:</h2>
          <table className="table table-striped">
            <tbody>
              <tr><th>Predmet</th><th>Rok prijave</th><th>Termin</th><th/></tr>
              {prijavljeniIspiti}
            </tbody>
          </table>
        </div>
          :<h3>Niste prijavili nijedan ispit.</h3>
      }

      {this.state.historijaIspiti
       ? <div><h2 className="podnaslov">Uspješni termini:</h2>
          <table className="table table-striped">
            <tbody>
              <tr><th>Predmet</th><th>Rok prijave</th><th>Termin</th><th/></tr>
              {historijaIspiti}
            </tbody>
          </table>
          </div>
          :<h3>Nemate nijedan uspješan termin.</h3>
      }
		</div>
    );
  }
}

export default Ispiti;
