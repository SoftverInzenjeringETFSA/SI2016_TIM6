import React, { Component } from 'react';

const Error = ({errorMessage}) => {
		return (
			<div className="fetch-error">
				<h2 className="podnaslov">Došlo je do greške prilikom povlačenja podataka.</h2>
				<p>{errorMessage}</p>
			</div>
		);
	}

export default Error;