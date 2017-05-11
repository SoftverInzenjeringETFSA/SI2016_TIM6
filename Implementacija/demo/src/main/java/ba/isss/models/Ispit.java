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
@Table(name="ispit")
public class Ispit {
	
public Ispit() {
    	
    }
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	
	private Timestamp prijave_do;
	private Timestamp termin;
	
	@ManyToOne(targetEntity=Predmet.class)
    @JoinColumn(name="predmet_id")
    private Predmet predmet;


	public Timestamp getPrijave_do() {
		return prijave_do;
	}

	public void setPrijave_do(Timestamp prijave_do) {
		this.prijave_do = prijave_do;
	}

	public Timestamp getTermino() {
		return termin;
	}

	public void setTermin(Timestamp termin) {
		this.termin = termin;
	}
	
    public Predmet getPredmet(){
    	return predmet;
    }
    
	public void setPredmet(Predmet predmet) {
		this.predmet = predmet;
	}
}
