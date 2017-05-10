import React, { Component } from 'react';
import './css/Obavjestenja.css';
import {PATH_BASE, PATH_OBAVJESTENJA, PATH_OBAVJESTENJA_FIND, PARAM_OBAVJESTENJA_STUDENT} from './globals';

class Obavjestenja extends Component {
	constructor(props){
		super(props);
		this.state = {obavijesti: []};
		this.dohvatiObavijesti = this.dohvatiObavijesti.bind(this);

	    this.lipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus fringilla erat."
      + "Nullam eros leo, euismod et erat ut, congue tristique est. Sed eu varius lorem." 
      + "Nam semper ex sapien, non porttitor sem scelerisque mattis. Sed imperdiet arcu in viverra interdum."
      + "Nunc id leo imperdiet turpis maximus condimentum ut quis odio.";

	}

	componentDidMount() {
		this.dohvatiObavijesti();
	}

	dohvatiObavijesti(){

        fetch(`${PATH_BASE}${PATH_OBAVJESTENJA}${PATH_OBAVJESTENJA_FIND}?${PARAM_OBAVJESTENJA_STUDENT}${this.props.user.id}`)
        	.then(response => response.json())
        	.then(result => {this.setState({obavijesti: result});});		
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
				{obavijesti}
			</div>
		</div>
	);
  }
}

export default Obavjestenja;