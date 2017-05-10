package ba.isss.dto;

public class PredmetDto {
	
	private Integer id;
	private Integer ocjena;
	private String profesor;
	
	
	public PredmetDto(Integer ID, Integer oc, String prof) {
		this.id = ID;
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
	
}
