import React, { Component } from 'react';
import './css/Obavjestenja.css';

class Obavjestenja extends Component {
	constructor(props){
		super(props);
		this.state = {};
		this.dohvatiObavijesti = this.dohvatiObavijesti.bind(this);

	}

	componentDidMount() {
		this.dohvatiObavijesti();
	}

	dohvatiObavijesti(){
		
	}

	render() {
		const obavijesti = this.props.obavijesti.map((i) => (
		  <a key={i.id} className="list-group-item">
		    <h4 className="list-group-item-heading">{i.naslov}</h4>
		    <p className="list-group-item-text">{i.tekst}</p>
		  </a>
		));

		return (
		<div>
			<h1 className="main-naslov">Obavještenja:</h1>
			<div className="list-group">
				{obavijesti}
			</div>
		</div>
	);
  }
}

export default Obavjestenja;