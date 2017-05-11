import React, { Component } from 'react';
import './css/PredmetDetalji.css';


const PredmetDetalji = ({predmet}) => 
	<div className="panel panel-default">
	  <div className="panel-heading"><h3 className="panel-title podnaslov">{predmet.naziv}</h3></div>
	  <div className="panel-body">
	    <div className="form-horizontal">
		  <div className="form-group">
		    <label className="col-sm-4 control-label">Predmetni nastavnik: </label>
		    <div className="col-sm-8 predmet-data">
		      <span>{predmet.profesor}</span>
		    </div>
		  </div>
		  <div className="form-group">
		    <label className="col-sm-4 control-label">Upisana ocjena: </label>
		    <div className="col-sm-8 predmet-data">
		      <span>{predmet.ocjena? predmet.ocjena : "Još uvijek niste upisali ocjenu iz ovog predmeta"}</span>
		    </div>
		  </div>

		</div>
	  </div>
	</div>

export default PredmetDetalji;