package ba.isss.dto;

import java.util.ArrayList;

public class PredmetSemestarDto {
	
	private Integer semestar;
	private ArrayList<PredmetDto> predmeti;
	
	// Constructor
	public PredmetSemestarDto(Integer sem, ArrayList<PredmetDto> arrayList) {
		this.setSemestar(sem);
		this.setPredmeti(arrayList);
	}

	// Getters and Setters
	public Integer getSemestar() {
		return semestar;
	}

	public void setSemestar(Integer semestar) {
		this.semestar = semestar;
	}

	public Iterable<PredmetDto> getPredmeti() {
		return predmeti;
	}

	public void setPredmeti(ArrayList<PredmetDto> predmeti) {
		this.predmeti = predmeti;
	}
	
}
