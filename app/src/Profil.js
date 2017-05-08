import React, { Component } from 'react';
import './css/Profil.css';


class Profil extends Component {

	constructor(props){
		super(props);
		this.state = {user: props.user};
    	this.onChangeIme = this.onChangeIme.bind(this);
    	this.onChangePrezime = this.onChangePrezime.bind(this);
    	this.onChangeJMBG = this.onChangeJMBG.bind(this);
    	this.onChangeAdresa = this.onChangeAdresa.bind(this);
    	this.onChangeMjesto = this.onChangeMjesto.bind(this);
    	this.onChangeTelefon = this.onChangeTelefon.bind(this);
    	this.onChangeEmail = this.onChangeEmail.bind(this);
	}

	onChangeIme(event){
		const updatedState = Object.assign({}, this.state);
		updatedState.user.ime = event.target.value;
		this.setState({updatedState});
	}

	onChangePrezime(event){
		const updatedState = Object.assign({}, this.state);
		updatedState.user.prezime = event.target.value;
	this.setState({updatedState});
	}

	onChangeJMBG(event){
		const updatedState = Object.assign({}, this.state);
		updatedState.user.jmbg = event.target.value;
		this.setState({updatedState});
	}

	onChangeAdresa(event){
		const updatedState = Object.assign({}, this.state);
		updatedState.user.adresa = event.target.value;
		this.setState({updatedState});
	}

	onChangeMjesto(event){
		const updatedState = Object.assign({}, this.state);
		updatedState.user.mjesto = event.target.value;
		this.setState({updatedState});
	}

	onChangeTelefon(event){
		const updatedState = Object.assign({}, this.state);
		updatedState.user.telefon = event.target.value;
		this.setState({updatedState});
	}

	onChangeEmail(event){
		const updatedState = Object.assign({}, this.state);
		updatedState.user.email = event.target.value;
		this.setState({updatedState});
	}

  	render() {
  	const trenutniUser = Object.assign({}, this.state);

    return (
    	<div>
			<h1 className="main-naslov">Pregled studentskog profila</h1>
	      	
	      	<form className="form-horizontal profil-forma center-block" onSubmit={() => this.props.onProfileSubmit(this.state)}>

			  <div className="form-group">
			    <label htmlFor="inputIme1" className="col-sm-2 control-label">Ime:</label>
			    <div className="col-sm-9">
			      <input type="text" className="form-control" id="inputIme1" placeholder="Ime" onChange={this.onChangeIme} value={this.props.user.ime} />
			    </div>
			  </div>

			  <div className="form-group">
			    <label htmlFor="inputPrezime1" className="col-sm-2 control-label">Prezime:</label>
			    <div className="col-sm-9">
			      <input type="text" className="form-control" id="inputPassword3" placeholder="Prezime" onChange={this.onChangePrezime} value={this.props.user.prezime} />
			    </div>
			  </div>

			  <div className="form-group">
			    <label htmlFor="jmbg1" className="col-sm-2 control-label">JMBG:</label>
			    <div className="col-sm-9">
			      <input type="text" className="form-control" id="jmbg1"  placeholder="JMBG" onChange={this.onChangeJMBG} value={this.props.user.jmbg} />
			    </div>
			  </div>

			  <div className="form-group">
			    <label className="col-sm-2 control-label">Spol:</label>
			    <div className="col-sm-9">
			      <label className="radio-inline">
	  				<input type="radio" name="spolOpcije" id="spol1" value="muski" /> Muški
				</label>

			      <label className="radio-inline">
	  				<input type="radio" name="spolOpcije" id="spol2" value="zenski" /> Ženski
				</label>
			    </div>
			  </div>

			  <div className="form-group">
			    <label htmlFor="adresa1" className="col-sm-2 control-label">Adresa (ulica i broj):</label>
			    <div className="col-sm-9">
			      <input type="text" className="form-control" id="adresa1" placeholder="Ulica i broj" onChange={this.onChangeAdresa} value={this.props.user.adresa} />
			    </div>
			  </div>

			  <div className="form-group">
			    <label htmlFor="mjesto1" className="col-sm-2 control-label">Mjesto:</label>
			    <div className="col-sm-9">
			      <input type="text" className="form-control" id="mjesto1" placeholder="Mjesto" onChange={this.onChangeMjesto} value={this.props.user.mjesto} />
			    </div>
			  </div>

			  <div className="form-group">
			    <label htmlFor="telefon1" className="col-sm-2 control-label">Telefon:</label>
			    <div className="col-sm-9">
			      <input type="tel" className="form-control" id="telefon1" placeholder="Telefon" onChange={this.onChangeTelefon} value={this.props.user.telefon} />
			    </div>
			  </div>

	  		  <div className="form-group">
			    <label htmlFor="email1" className="col-sm-2 control-label">Email:</label>
			    <div className="col-sm-9">
			      <input type="email" className="form-control" id="email1" placeholder="Email" onChange={this.onChangeEmail} value={this.props.user.email} />
			    </div>
			  </div>

			  <div className="form-group">
			    <div className="col-sm-offset-2 col-sm-10">
			      <button type="submit" className="btn btn-primary">Ažuriraj podatke</button>
			    </div>
			  </div>
			</form>
		</div>

    );
  }
}

export default Profil;