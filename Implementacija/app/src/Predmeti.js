import React, { Component } from 'react';
import './css/Predmeti.css';
import PredmetDetalji from './PredmetDetalji';
import Error from './Error';
import {makeCancelable, PATH_BASE, PATH_PREDMETI, PATH_PREDMETI_FIND, PARAM_STUDENT_FUTURE, PATH_STUDENT} from './globals';


class Predmeti extends Component {
	constructor(props){
		super(props);
		this.state = {
			semestri: [],
			semestri1: [],
			izabraniPredmet: null,
			izabraniPredmet1: null,
			errorMessage: null,
		};
		this.dohvatiPredmete = this.dohvatiPredmete.bind(this);
		this.izborPredmeta = this.izborPredmeta.bind(this);
		this.izborPredmeta1 = this.izborPredmeta1.bind(this);
		this.request = null;
		this.request1 = null;
	}

	dohvatiPredmete(){
        this.request = makeCancelable(fetch(`${PATH_BASE}${PATH_PREDMETI}${PATH_PREDMETI_FIND}`,{
		   method: 'GET',
		   headers: {
		     'Accept': 'application/json',
		     'Content-Type': 'application/json',
		     'Authorization': this.props.token
		   }
		   }));

        this.request.promise.then(response => response.json())
        	.then(result => this.setState({semestri: result}))
        	.catch(error => this.setState({errorMessage: error + ""}));


				this.request1 = makeCancelable(fetch(`${PATH_BASE}${PATH_STUDENT}${PARAM_STUDENT_FUTURE}`,{
				 method: 'GET',
				 headers: {
					 'Accept': 'application/json',
					 'Content-Type': 'application/json',
					 'Authorization': this.props.token
				 }
				 }));

					this.request1.promise.then(response => response.json())
						.then(result => this.setState({semestri1: result}))
						.catch(error => this.setState({errorMessage: error + ""}));
	}

	componentWillUnmount(){
		this.request.cancel();
	}

	componentDidMount() {
		this.dohvatiPredmete();
	}

	izborPredmeta(predmet){
		this.setState({izabraniPredmet: predmet});
	}

	izborPredmeta1(predmet){
		this.setState({izabraniPredmet1: predmet});
	}

	render() {
		const listaSemestara = this.state.semestri.map((i, index) => {

			const listaPredmeta = i.predmeti.map(j => {
				  return <span key={j.id} className="list-group-item predmet-item click-cursor" onClick={() => this.izborPredmeta(j)}>{j.naziv}</span>
				  }
				);

			return (
				<div key={i.semestar}>
				  <div className="panel panel-default">
				    <div className="panel-heading accordion-sem-heading">
				      <h4 className="panel-title">
				        <a data-toggle="collapse" data-parent="#accordion" className="sem-toggle" href={"#collapse" + index}>
				        {i.semestar + ". semestar"}</a>
				      </h4>
				    </div>
				    <div id={"collapse" + index} className={this.props.user.semestar != i.semestar ? "panel-collapse collapse in" : "panel-collapse collapse"}>
				      <div className="panel-body predmeti-accordion-body">
						<div className="list-group predmeti-accordion-list">
							{listaPredmeta}
						</div>
				      </div>
				    </div>
				  </div>
				</div>
		);}
			);

			const listaSemestara1 = this.state.semestri1.map((i, index1) => {
				const listaPredmeta1 = i.predmeti.map(j => {
					  return <span key={j.id} className="list-group-item predmet-item click-cursor" onClick={() => this.izborPredmeta1(j)}>{j.naziv}</span>
					  }
					);

				return (
					<div key={i.semestar}>
					  <div className="panel panel-default">
					    <div className="panel-heading accordion-sem-heading">
					      <h4 className="panel-title">
					        <a data-toggle="collapse" data-parent="#accordion1" className="sem-toggle" href={"#collapse" + index1 +1000}>
					        {i.semestar + ". semestar"}</a>
					      </h4>
					    </div>
					    <div id={"collapse" + index1 + 1000} className={this.props.user.semestar != i.semestar ? "panel-collapse collapse in" : "panel-collapse collapse"}>
					      <div className="panel-body predmeti-accordion-body">
							<div className="list-group predmeti-accordion-list">
								{listaPredmeta1}
							</div>
					      </div>
					    </div>
					  </div>
					</div>
			);}
				);



		if (!this.state.errorMessage){
			return (
				<div>
					<div className="row">
			<h1 className="main-naslov">Predmeti</h1>
			<img className="icon" src={require('./img/predmeti.png')}/>
			</div>
					<h2 className="podnaslov">Pregled predmeta</h2>
					<div className="row">
						<div className="panel-group col-md-3" id="accordion">
							{listaSemestara}
						</div>


						{this.state.izabraniPredmet
						?<div className="col-md-9">
							<PredmetDetalji predmet={this.state.izabraniPredmet} />
						</div>
						: <div className="col-md-9"></div>
					}
					</div>

					<h2 className="podnaslov">Pregled budućih predmeta</h2>
					<div className="row">
						<div className="panel-group col-md-3" id="accordion1">
							{listaSemestara1}
						</div>

						{this.state.izabraniPredmet1
						?<div className="col-md-9">
							<PredmetDetalji predmet={this.state.izabraniPredmet1} />
						</div>
						: <div className="col-md-9"></div>
					}
					</div>




				</div>
			);
		}
		else{
			return (
				<div>
					<h1 className="main-naslov">Pregled predmeta</h1>
					<div className="row">
						<Error errorMessage={this.state.errorMessage}/>
					</div>
				</div>
				);
		}
	}
}

export default Predmeti;
