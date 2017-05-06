import React, { Component } from 'react';


class Obavjestenja extends Component {
	constructor(props){
		super(props);
		this.state = {obavijesti: props.obavijesti};
	}



	render() {
		const obavijesti = this.state.obavijesti.map((i) => <li>{i}</li>);

		return (
		<div>
		<h1 className="main-naslov">Obavještenja:</h1>
		<ul>
			{obavijesti}
		</ul>
		</div>
	);
  }
}

export default Obavjestenja;
