import React, { Component } from 'react';
import './css/PredmetDetalji.css';


const PredmetDetalji = ({predmet}) => 
	<div className="panel panel-default">
	  <div className="panel-heading"><h3 className="panel-title">{predmet.naziv}</h3></div>
	  <div className="panel-body">
	    Panel content
	  </div>
	</div>

export default PredmetDetalji;