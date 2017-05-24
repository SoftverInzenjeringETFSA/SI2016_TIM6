import React, { Component } from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';
import './css/Profil.css';
import {makeCancelable, PATH_BASE,  PATH_STUDENT, PATH_STUDENT_PASSWORD} from './globals';


class Profil extends Component {

	constructor(props){
		super(props);
		this.state = {user: Object.assign({}, this.props.user),
						errorCodes: [],
						sifra1: "",
						sifra2: "",
						sifra: "",
						poruka1: this.props.poruka1
					};
  		this.onChangeSifra1 = this.onChangeSifra1.bind(this);
			this.onChangeSifra2 = this.onChangeSifra2.bind(this);
			this.onChangeSifra = this.onChangeSifra.bind(this);
    	this.submitProfile = this.submitProfile.bind(this);
    	this.validacija = this.validacija.bind(this);
			reactLocalStorage.set('putanja','profil');
	}

	onChangeSifra(event){
		this.setState({sifra: event.target.value});
	}
	onChangeSifra1(event){
		this.setState({sifra1: event.target.value});
	}
	onChangeSifra2(event){
		this.setState({sifra2: event.target.value});
	}


	validacija(){
		var nextErrorCodes = [];

		if (this.state.sifra1.length < 4){
			nextErrorCodes.push("DS");
		}

		if (this.state.sifra1 !== this.state.sifra2){
			nextErrorCodes.push("NS");
		}

		if(this.state.sifra1 === this.state.sifra){
			nextErrorCodes.push("SS");
		}
		this.setState({errorCodes: nextErrorCodes});
		return nextErrorCodes.length === 0;
	}

	submitProfile(){
		if (this.validacija()){
			//this.props.onProfileSubmit(this.state);

		var params = {
				password1: this.state.sifra1,
				password2: this.state.sifra2,
				password: this.state.sifra
	};

	var formBody = [];
	for (var property in params) {
		var encodedKey = encodeURIComponent(property);
		var encodedValue = encodeURIComponent(params[property]);
		formBody.push(encodedKey + "=" + encodedValue);
	}
	formBody = formBody.join("&");
			this.request=makeCancelable(fetch(`${PATH_BASE}${PATH_STUDENT}${PATH_STUDENT_PASSWORD}`,{
		method: 'POST',
		headers: {
			'Accept': 'application/text',
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
			'Authorization': this.props.token
		},
		body: formBody
	}));

		this.request.promise.then(response => { if (response.status== 200)
			{
				response.text().then(text => {
				this.setState({poruka1: text});})
			}
			else {
				this.setState({poruka1: "N"});
			}
		}
	).catch(error =>
		{
			this.setState({poruka1: "N"});
		});

		}
	}
PrikazPoruke() {
	if (this.state.poruka1==="N")
	        alert("Šifra nije promijenjena.");
	else
			alert(this.state.poruka1);

	this.setState({poruka1: null});
}

  	render() {
  	const trenutniUser = Object.assign({}, this.state);

    return (
    	<div>
				<div className="row">
			<h1 className="main-naslov">Pregled studentskog profila</h1>
			<img className="icon" src={require('./img/profil.png')}/>
			</div>
	<div className="form-horizontal profil-forma center-block">

       {this.state.poruka1 ? this.PrikazPoruke() : null}

					<div className="form-group profil-form-group">
						<label  className="col-sm-2 control-label">Korisničko ime:</label>
						<div className="col-sm-2 control-label">
								<span>{this.state.user.username}</span>
						</div>
				 	</div>
					<hr className="separator"></hr>
			  <div className="form-group profil-form-group">
			    <label  className="col-sm-2 control-label">Ime:</label>
			    <div className="col-sm-2 control-label">
							<span>{this.state.user.ime}</span>
			 		</div>
			 </div>
			<hr className="separator"></hr>
			 <div className="form-group profil-form-group">
				 <label  className="col-sm-2 control-label">Prezime:</label>
				 <div className="col-sm-2 control-label">
						 <span>{this.state.user.prezime}</span>
				 </div>
			</div>
			<hr className="separator"></hr>
			<div className="form-group profil-form-group">
				<label  className="col-sm-2 control-label">JMBG:</label>
				<div className="col-sm-2 control-label">
						<span>{this.state.user.jmbg}</span>
				</div>
		 </div>
		 <hr className="separator"></hr>
		 <div className="form-group profil-form-group">
			 <label  className="col-sm-2 control-label">Datum rođenja:</label>
			 <div className="col-sm-2 control-label">
					 <span>{this.state.user.datumRodjenja}</span>
			 </div>
		</div>
		<hr className="separator"></hr>
		<div className="form-group profil-form-group">
		 <label  className="col-sm-2 control-label">Mjesto rođenja:</label>
		 <div className="col-sm-2 control-label">
				 <span>{this.state.user.mjestoRodjenja}</span>
		 </div>
	 </div>
	 <hr className="separator"></hr>
		<div className="form-group profil-form-group">
			<label  className="col-sm-2 control-label">Spol:</label>
			<div className="col-sm-2 control-label">
					<span>{(this.state.user.spol === "M") ? "Muški" : "Ženski"}</span>
			</div>
	 </div>
	 <hr className="separator"></hr>
	 <div className="form-group profil-form-group">
		 <label  className="col-sm-2 control-label">Adresa:</label>
		 <div className="col-sm-2 control-label">
				 <span>{this.state.user.adresa}</span>
		 </div>
	</div>
	<hr className="separator"></hr>
	<div className="form-group profil-form-group">
 	 <label  className="col-sm-2 control-label">Telefon:</label>
 	 <div className="col-sm-2 control-label">
 			 <span>{this.state.user.telefon}</span>
 	 </div>
 	</div>
	 <hr className="separator"></hr>
 	<div className="form-group profil-form-group">
		<label  className="col-sm-2 control-label">Email:</label>
		<div className="col-sm-2 control-label">
				<span>{this.state.user.email}</span>
		</div>
 	</div>
	<hr className="separator"></hr> 
</div>


<div>
<div className="row row-pass">
			<h1 className="main-naslov">Izmjena šifre</h1>
			<img className="icon icon-pass" src={require('./img/pass.png')}/>
			</div>
<div className="form-horizontal profil-forma center-block">
	<form className="form-horizontal profil-forma center-block">

	  		  <div className="form-group profil-form-group">
			    <label htmlFor="password1" className="col-sm-2 control-label">Nova šifra:</label>
			    <div className="col-sm-4">
			      <input type="password" className="form-control" id="password1" placeholder="Nova šifra" onChange={this.onChangeSifra1} />
			    </div>
			  </div>

				{this.state.errorCodes.find(x => x === "DS")
			? <div className="row error-row">
				<div className="col-sm-2">
				</div>
				<div className="col-sm-9">
					<span>Šifra je prekratka.</span>
				</div>
			</div>
			:
			null
			}
				<div className="form-group profil-form-group">
				<label htmlFor="password2" className="col-sm-2 control-label">Nova šifra:</label>
				<div className="col-sm-4">
					<input type="password" className="form-control" id="password2" placeholder="Nova šifra" onChange={this.onChangeSifra2}   />
				</div>
			</div>


  			  {this.state.errorCodes.find(x => x === "NS")
			  ? <div className="row error-row">
			  	<div className="col-sm-2">
			  	</div>
			    <div className="col-sm-9">
			    	<span>Šifre nisu jednake.</span>
			    </div>
			  </div>
			  :
			  null
			  }
				<div className="form-group profil-form-group">
				<label htmlFor="password" className="col-sm-2 control-label">Stara šifra:</label>
				<div className="col-sm-4">
					<input type="password" className="form-control" id="password" placeholder="Stara šifra" onChange={this.onChangeSifra}   />
				</div>
			</div>

				{this.state.errorCodes.find(x => x === "SS")
			? <div className="row error-row">
				<div className="col-sm-2">
				</div>
				<div className="col-sm-9">
					<span>Nova i stara šifra su jednake.</span>
				</div>
			</div>
			:
			null
			}






			    <div className="col-sm-6 col-md-6">
			      <button type="button" className="btn btn-pass btn-primary" onClick={this.submitProfile}>Promijeni šifru</button>
			    </div>

			</form>
		</div>
</div>
</div>
    );
  }
}

export default Profil;
