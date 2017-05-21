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
@Table(name="obavjestenja")
public class Obavjestenje {
    public Obavjestenje() {
    	
    }
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	
	private String naslov;
	private String tekst;
	private Date vrijeme;
	
	@ManyToOne(targetEntity=Predmet.class)
    @JoinColumn(name="predmet_id")
    private Predmet predmet;

	public String getNaslov() {
		return naslov;
	}

	public void setNaslov(String naslov) {
		this.naslov = naslov;
	}

	public String getTekst() {
		return tekst;
	}

	public void setTekst(String tekst) {
		this.tekst = tekst;
	}

	public Date getVrijeme() {
		return vrijeme;
	}

	public void setVrijeme(Date vrijeme) {
		this.vrijeme = vrijeme;
	}

    public Predmet getPredmet(){
    	return predmet;
    }
    
	public void setPredmet(Predmet predmet) {
		this.predmet = predmet;
	}
	
}
