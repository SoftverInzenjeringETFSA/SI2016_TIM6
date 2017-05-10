package ba.isss.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="predmet")
public class Predmet implements Serializable {
	private static final long serialVersionUID = 1L;

	 @Id
	    @GeneratedValue(strategy=GenerationType.AUTO)
	    private Integer id; 
	 
	 private String naziv;
	 private int semestar;
	 private int profesor_id;
	 private int odsjek_id;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNaziv() {
		return naziv;
	}
	public void setNaziv(String naziv) {
		this.naziv = naziv;
	}
	public int getSemestar() {
		return semestar;
	}
	public void setSemestar(int semestar) {
		this.semestar = semestar;
	}
	public int getProfesor_id() {
		return profesor_id;
	}
	public void setProfesor_id(int profesor_id) {
		this.profesor_id = profesor_id;
	}
	public int getOdsjek_id() {
		return odsjek_id;
	}
	public void setOdsjek_id(int odsjek_id) {
		this.odsjek_id = odsjek_id;
	}
	 
	 
	 
	    

}
