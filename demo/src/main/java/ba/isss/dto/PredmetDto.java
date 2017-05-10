package ba.isss.dto;

public class PredmetDto {
	
	private Integer id;
	private String naziv;
	private Integer ocjena;
	private String profesor;
	
	
	public PredmetDto(Integer ID, String naziv, Integer oc, String prof) {
		this.id = ID;
		this.naziv = naziv;
		this.ocjena = oc;
		this.profesor = prof;
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
	
}
