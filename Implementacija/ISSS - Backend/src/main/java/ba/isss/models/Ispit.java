package ba.isss.models;

import java.util.Date;

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
	
	private Date prijave_do;
	private Date termin;
	
	@ManyToOne(targetEntity=Predmet.class)
    @JoinColumn(name="predmet_id")
    private Predmet predmet;

	public Integer getId() {
		return id;
	}
	
	public Date getPrijave_do() {
		return prijave_do;
	}

	public void setPrijave_do(Date prijave_do) {
		this.prijave_do = prijave_do;
	}

	public Date getTermin() {
		return termin;
	}

	public void setTermin(Date termin) {
		this.termin = termin;
	}
	
    public Predmet getPredmet(){
    	return predmet;
    }
    
	public void setPredmet(Predmet predmet) {
		this.predmet = predmet;
	}
}
