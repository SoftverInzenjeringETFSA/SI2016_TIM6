package ba.isss.dto;

import java.util.Date;

public class PrijavljeniIspitDto {

	private String predmet;
	private Date termin;
	
	//konstruktor
	
	public String getPredmet() {
		return predmet;
	}
	public void setPredmet(String predmet) {
		this.predmet = predmet;
	}
	public Date getTermin() {
		return termin;
	}
	public void setTermin(Date termin) {
		this.termin = termin;
	}
	
	
}
