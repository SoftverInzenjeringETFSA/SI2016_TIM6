import React, { Component } from 'react';
import './css/Obavjestenja.css';

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
		const updatedState = Object.assign({}, this.state);
		
		updatedState.obavijesti = [
          {id:1, naslov: "Et pluribus Unum", tekst: this.lipsum},
          {id:2, naslov: "Et pluribus Unum", tekst: this.lipsum},
          {id:3, naslov: "Et pluribus Unum", tekst: this.lipsum},
          {id:4, naslov: "Et pluribus Unum", tekst: this.lipsum}
        ];

		this.setState(updatedState);
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