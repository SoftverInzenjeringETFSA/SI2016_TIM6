package ba.isss.dto;

import java.sql.Timestamp;

public class PrijavljeniIspitDto {

	private String predmet;
	private Timestamp termin;
	
	//konstruktor
	
	public String getPredmet() {
		return predmet;
	}
	public void setPredmet(String predmet) {
		this.predmet = predmet;
	}
	public Timestamp getTermin() {
		return termin;
	}
	public void setTermin(Timestamp termin) {
		this.termin = termin;
	}
	
	
}
