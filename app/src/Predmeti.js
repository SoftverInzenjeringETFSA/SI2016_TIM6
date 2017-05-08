import React, { Component } from 'react';
import './css/Predmeti.css';
import PredmetDetalji from './PredmetDetalji';


class Predmeti extends Component {
	constructor(props){
		super(props);
		this.state = {
			semestri: [],
			izabraniPredmet: null,
		};
		this.dohvatiPredmete = this.dohvatiPredmete.bind(this);
		this.izborPredmeta = this.izborPredmeta.bind(this);
	}

	dohvatiPredmete(){
		this.setState({
			semestri: [{
				semestar: 1,
				predmeti: [
				{id: 1, naziv: "Matematika", ocjena: 8, profesor: "Huse Fatkić"},
				{id: 2, naziv: "LAG", ocjena: 8, profesor: "Almasa Odžak"},
				{id: 3, naziv: "OS", ocjena: 8, profesor: "Samir Ribić"}]
			},
			{
				semestar: 2,
				predmeti: [
				{id: 4, naziv: "IM2", ocjena: 8, profesor: "Huse Fatkić"},
				{id: 5, naziv: "Elektrotehnika", ocjena: 8, profesor: "Džemo Džemić"},
				{id: 6, naziv: "Fizika", ocjena: 8, profesor: "Suljo Suljić"}]
			},
			
			]});
	}

	componentDidMount() {
		this.dohvatiPredmete();
	}

	izborPredmeta(predmet){
		this.setState({izabraniPredmet: predmet});
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
				    <div id={"collapse" + index} className={this.props.user.semestar === i.semestar ? "panel-collapse collapse in" : "panel-collapse collapse"}>
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

		return (
			<div>
				<h1 className="main-naslov">Pregled predmeta</h1>
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
			</div>
		);
	}
}

export default Predmeti;