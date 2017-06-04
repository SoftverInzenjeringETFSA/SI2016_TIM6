package ba.isss.dto;

public class PredmetDto {
	
	private Integer id;
	private String naziv;
	private Integer ocjena;
	private String profesor;
	private Double prosjek;
	private String opis;
	
	public PredmetDto(Integer ID, String naziv, Integer oc, String prof, Double pros, String opis) {
		this.id = ID;
		this.naziv = naziv;
		this.ocjena = oc;
		this.profesor = prof;
		this.prosjek = pros;
		this.opis = opis;
	}
	
	// Getters and Setters
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getOcjena() {
		return ocjena;
	}
	public void setOcjena(Integer ocjena) {
		this.ocjena = ocjena;
	}
	public String getProfesor() {
		return profesor;
	}
	public void setProfesor(String profesor) {
		this.profesor = profesor;
	}
	public String getNaziv() {
		return naziv;
	}
	public void setNaziv(String naziv) {
		this.naziv = naziv;
	}
	public Double getProsjek() {
		return prosjek;
	}
	public void setProsjek(Double prosjek) {
		this.prosjek = prosjek;
	}


	public String getOpis() {
		return opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}
}