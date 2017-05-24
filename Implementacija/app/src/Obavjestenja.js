import React, { Component } from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';
import './css/Obavjestenja.css';
import {PATH_BASE, PATH_OBAVJESTENJA, PATH_OBAVJESTENJA_FIND, makeCancelable} from './globals';
const Timestamp = require('react-timestamp');

import Error from './Error';

class Obavjestenja extends Component {
	constructor(props){
		super(props);
		this.state = {obavijesti: [], errorMessage: null};
		this.dohvatiObavijesti = this.dohvatiObavijesti.bind(this);
		this.request = null;
		reactLocalStorage.set('putanja','obavjestenja');
	}

	componentDidMount() {
		this.dohvatiObavijesti();
	}

	dohvatiObavijesti(){
        this.request = makeCancelable(fetch(`${PATH_BASE}${PATH_OBAVJESTENJA}${PATH_OBAVJESTENJA_FIND}`,{
		   method: 'GET',
		   headers: {
		     'Accept': 'application/json',
		     'Content-Type': 'application/json',
		     'Authorization': this.props.token
		   }
		   }));

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
				<p className="list-group-item-text"><Timestamp time={i.vrijeme/1000} format='full'/></p>
		    <p className="list-group-item-text">{i.tekst}</p>
		  </a>
		));

		return (
		<div>
			<div className="row">
			<h1 className="main-naslov">Obavještenja</h1>
			<img className="icon" src={require('./img/obavjestenja.png')}/>
			</div>
			<div className="list-group">
				{!this.state.errorMessage? obavijesti : <Error errorMessage={this.state.errorMessage}/>}
			</div>
		</div>
	);
  }
}

export default Obavjestenja;
