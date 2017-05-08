import React, { Component } from 'react';
import './css/Profil.css';


class Profil extends Component {

	constructor(props){
		super(props);
		this.state = {user: Object.assign({}, this.props.user),
						errorCodes: [],
						status: null
					};
    	this.onChangeIme = this.onChangeIme.bind(this);
    	this.onChangePrezime = this.onChangePrezime.bind(this);
    	this.onChangeJMBG = this.onChangeJMBG.bind(this);
    	this.onChangeAdresa = this.onChangeAdresa.bind(this);
    	this.onChangeMjesto = this.onChangeMjesto.bind(this);
    	this.onChangeSpol = this.onChangeSpol.bind(this);
    	this.onChangeTelefon = this.onChangeTelefon.bind(this);
    	this.onChangeEmail = this.onChangeEmail.bind(this);
    	
    	this.submitProfile = this.submitProfile.bind(this);
    	this.validacija = this.validacija.bind(this);
    	this.isEmail = this.isEmail.bind(this);
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

	onChangeSpol(event){
		const updatedState = Object.assign({}, this.state);
		updatedState.user.spol = event.target.value;
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

	isEmail(email){
		return /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test( email );	
	}

	validacija(){
		var nextErrorCodes = [];
		
		if (this.state.user.ime.length <= 0){
			nextErrorCodes.push("IM");
		}

		if (this.state.user.prezime.length <= 0){
			nextErrorCodes.push("PI");
		}

		if (this.state.user.jmbg.length !== 13 || !(/^\d{13}$/.test(this.state.user.jmbg))){
			nextErrorCodes.push("MB");
		}

		if (this.state.user.adresa.length <= 0){
			nextErrorCodes.push("AD");
		}

		if (this.state.user.mjesto.length <= 0){
			nextErrorCodes.push("MJ");
		}

		if ( !(/^\d{3}-\d{3}-\d{3}$/.test(this.state.user.telefon)) && !(/^\d{9}$/.test(this.state.user.telefon))){
			nextErrorCodes.push("TL");
		}

		if (!(this.isEmail(this.state.user.email))){
			nextErrorCodes.push("EM");
		}

		this.setState({errorCodes: nextErrorCodes});
		return nextErrorCodes.length === 0;
	}

	submitProfile(){
		if (this.validacija()){
			this.props.onProfileSubmit(this.state);
		}
	}

  	render() {
  	const trenutniUser = Object.assign({}, this.state);

    return (
    	<div>
			<h1 className="main-naslov profil-naslov">Pregled studentskog profila</h1>
	      	
	      	<form className="form-horizontal profil-forma center-block">


			  <div className="form-group profil-form-group">
			    <label htmlFor="inputIme1" className="col-sm-2 control-label">Ime:</label>
			    <div className="col-sm-9">
			      <input type="text" className="form-control" id="inputIme1" placeholder="Ime" onChange={this.onChangeIme} value={this.state.user.ime} />
			    </div>
			  </div>

			  {this.state.errorCodes.find(x => x === "IM")
			  ? <div className="row error-row">
			  	<div className="col-sm-2">
			  	</div>
			    <div className="col-sm-9">
			    	<span>Morate unijeti Vaše ime.</span>
			    </div>
			  </div>
			  :
			  null
			  }


			  <div className="form-group profil-form-group">
			    <label htmlFor="inputPrezime1" className="col-sm-2 control-label">Prezime:</label>
			    <div className="col-sm-9">
			      <input type="text" className="form-control" id="inputPassword3" placeholder="Prezime" onChange={this.onChangePrezime} value={this.state.user.prezime} />
			    </div>
			  </div>

			  {this.state.errorCodes.find(x => x === "PI")
			  ? <div className="row error-row">
			  	<div className="col-sm-2">
			  	</div>
			    <div className="col-sm-9">
			    	<span>Morate unijeti Vaše prezime.</span>
			    </div>
			  </div>
			  :
			  null
			  }

			  <div className="form-group profil-form-group">
			    <label htmlFor="jmbg1" className="col-sm-2 control-label">JMBG:</label>
			    <div className="col-sm-9">
			      <input type="text" className="form-control" id="jmbg1"  placeholder="JMBG" onChange={this.onChangeJMBG} value={this.state.user.jmbg} />
			    </div>
			  </div>

  			  {this.state.errorCodes.find(x => x === "MB")
			  ? <div className="row error-row">
			  	<div className="col-sm-2">
			  	</div>
			    <div className="col-sm-9">
			    	<span>Morate unijeti Vaše JMBG koji se sastoji od 13 cifara.</span>
			    </div>
			  </div>
			  :
			  null
			  }

			  <div className="form-group profil-form-group">
			    <label className="col-sm-2 control-label">Spol:</label>
			    <div className="col-sm-9" onChange={this.onChangeSpol}>
			      <label className="radio-inline">
	  				<input type="radio" name="spolOpcije" id="spol1" value="m" checked={this.state.user.spol === "m"}/> Muški
				</label>

			      <label className="radio-inline">
	  				<input type="radio" name="spolOpcije" id="spol2" value="f" checked={this.state.user.spol === "f"}/> Ženski
				</label>
			    </div>
			  </div>

			  <div className="form-group profil-form-group">
			    <label htmlFor="adresa1" className="col-sm-2 control-label">Adresa (ulica i broj):</label>
			    <div className="col-sm-9">
			      <input type="text" className="form-control" id="adresa1" placeholder="Ulica i broj" onChange={this.onChangeAdresa} value={this.state.user.adresa} />
			    </div>
			  </div>

			  {this.state.errorCodes.find(x => x === "AD")
			  ? <div className="row error-row">
			  	<div className="col-sm-2">
			  	</div>
			    <div className="col-sm-9">
			    	<span>Morate unijeti Vašu adresu.</span>
			    </div>
			  </div>
			  :
			  null
			  }

			  <div className="form-group profil-form-group">
			    <label htmlFor="mjesto1" className="col-sm-2 control-label">Mjesto:</label>
			    <div className="col-sm-9">
			      <input type="text" className="form-control" id="mjesto1" placeholder="Mjesto" onChange={this.onChangeMjesto} value={this.state.user.mjesto} />
			    </div>
			  </div>

			  {this.state.errorCodes.find(x => x === "MJ")
			  ? <div className="row error-row">
			  	<div className="col-sm-2">
			  	</div>
			    <div className="col-sm-9">
			    	<span>Morate unijeti mjesto u kojem živite.</span>
			    </div>
			  </div>
			  :
			  null
			  }

			  <div className="form-group profil-form-group">
			    <label htmlFor="telefon1" className="col-sm-2 control-label">Telefon:</label>
			    <div className="col-sm-9">
			      <input type="tel" className="form-control" id="telefon1" placeholder="Telefon" onChange={this.onChangeTelefon} value={this.state.user.telefon} />
			    </div>
			  </div>

			  {this.state.errorCodes.find(x => x === "TL")
			  ? <div className="row error-row">
			  	<div className="col-sm-2">
			  	</div>
			    <div className="col-sm-9">
			    	<span>Morate unijeti Vaš broj telefona u formatu 123-456-789 ili 123456789.</span>
			    </div>
			  </div>
			  :
			  null
			  }

	  		  <div className="form-group profil-form-group">
			    <label htmlFor="email1" className="col-sm-2 control-label">Email:</label>
			    <div className="col-sm-9">
			      <input type="email" className="form-control" id="email1" placeholder="Email" onChange={this.onChangeEmail} value={this.state.user.email} />
			    </div>
			  </div>

  			  {this.state.errorCodes.find(x => x === "EM")
			  ? <div className="row error-row">
			  	<div className="col-sm-2">
			  	</div>
			    <div className="col-sm-9">
			    	<span>Morate unijeti validnu email adresu.</span>
			    </div>
			  </div>
			  :
			  null
			  }

			  <div className="form-group profil-form-group">
			    <div className="col-sm-6 status-profil">
			    	{this.state.status === "US"? 
			    		<span className="status-profil-uspjeh">Uspješno ažuriran profil!</span>
			    			: null
		    		}
			    	{this.state.status === "ER"? 
			    		<span className="status-profil-error">Greška pri ažuriranju profila!</span>
			    			: null
		    		}

			    </div>

			    <div className="col-sm-6">
			      <button type="button" className="btn btn-primary" onClick={this.submitProfile}>Ažuriraj podatke</button>
			    </div>
			  </div>
			</form>
		</div>

    );
  }
}

export default Profil;