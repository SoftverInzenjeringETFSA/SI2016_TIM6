package ba.isss.models;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;


@Entity
@Table(name="student")
public class Student implements Serializable {
	private static final long serialVersionUID = 1L;
	  
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id; 
    
    private String ime;
    private String prezime;
    private String email;
    private String password;
    private String jmbg;
    private Date datumRodjenja;
    private String mjestoRodjenja;
    private Integer semestar;
    private Integer odsjekId;
    
    /*
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "idkorisnika")
    private Nezaposleni nezaposleni;
    
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "idkorisnika")
    private Admin admin;
    
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "idkorisnika")
    private Poslodavci poslodavac;
   */
    
    public Student() {
    	
    }
    
    public Integer getId() {
		return this.id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}

	public String getIme() {
		return ime;
	}

	public void setIme(String ime) {
		this.ime = ime;
	}

	public String getPrezime() {
		return prezime;
	}

	public void setPrezime(String prezime) {
		this.prezime = prezime;
	}

	public String getJmbg() {
		return jmbg;
	}

	public void setJmbg(String jmbg) {
		this.jmbg = jmbg;
	}

	public Date getDatumRodjenja() {
		return datumRodjenja;
	}

	public void setDatumRodjenja(Date datumRodjenja) {
		this.datumRodjenja = datumRodjenja;
	}

	public String getMjestoRodjenja() {
		return mjestoRodjenja;
	}

	public void setMjestoRodjenja(String mjestoRodjenja) {
		this.mjestoRodjenja = mjestoRodjenja;
	}

	public Integer getSemestar() {
		return semestar;
	}

	public void setSemestar(Integer semestar) {
		this.semestar = semestar;
	}

	public Integer getOdsjekId() {
		return odsjekId;
	}

	public void setOdsjekId(Integer odsjekId) {
		this.odsjekId = odsjekId;
	}
	
	@Override
    public String toString() {
        return String.format("Korisnik[id=%d, password='%s', email='%s']", id, password, email);
    }
}