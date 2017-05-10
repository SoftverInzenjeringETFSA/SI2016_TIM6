package ba.isss.models;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="odsjek")
public class Odsjek {
	
    public Odsjek() {
    	
    }

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	
	private String naziv;
	
	@ManyToOne(targetEntity=Fakultet.class)
    @JoinColumn(name="fakultet_id")
    private Fakultet fakultet;

	public String getNaziv() {
		return naziv;
	}

	public void setNaziv(String naziv) {
		this.naziv = naziv;
	}

    public Fakultet getFakultet(){
    	return fakultet;
    }
    
	public void setFakultet(Fakultet fakultet) {
		this.fakultet = fakultet;
	}

}
