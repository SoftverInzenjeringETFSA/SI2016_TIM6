import React, { Component } from 'react';
import './css/Obavjestenja.css';
import {PATH_BASE, PATH_OBAVJESTENJA, PATH_OBAVJESTENJA_FIND, PARAM_OBAVJESTENJA_STUDENT, makeCancelable} from './globals';

import Error from './Error';

class Obavjestenja extends Component {
	constructor(props){
		super(props);
		this.state = {obavijesti: [], errorMessage: null};
		this.dohvatiObavijesti = this.dohvatiObavijesti.bind(this);

		this.request = null;
	}

	componentDidMount() {
		this.dohvatiObavijesti();
	}

	dohvatiObavijesti(){
        this.request = makeCancelable(fetch(`${PATH_BASE}${PATH_OBAVJESTENJA}${PATH_OBAVJESTENJA_FIND}?${PARAM_OBAVJESTENJA_STUDENT}${this.props.user.id}`));

        this.request.promise.then(response => response.json())
        	.then(result => this.setState({obavijesti: result}))
        	.catch(error => this.setState({errorMessage: error + ""}));
	}

	componentWillUnmount(){
		this.request.cancel();
	}


	render() {
		const obavijesti = this.state.obavijesti.map((i) => (
		  <a key={i.id} className="list-group-item">
		    <h4 className="list-group-item-heading">{i.naslov}</h4>
		    <p className="list-group-item-text">{i.tekst}</p>
		  </a>
		));

		return (
		<div>
			<h1 className="main-naslov">Obavještenja</h1>
			<div className="list-group">
				{!this.state.errorMessage? obavijesti : <Error errorMessage={this.state.errorMessage}/>}
			</div>
		</div>
	);
  }
}

export default Obavjestenja;