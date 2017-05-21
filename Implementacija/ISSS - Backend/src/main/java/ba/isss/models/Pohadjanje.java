package ba.isss.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="pohadjanje")
public class Pohadjanje {
	public Pohadjanje() {
    	
    }
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	
	private Integer ocjena;
	
	@ManyToOne(targetEntity=Predmet.class)
    @JoinColumn(name="predmet_id")
    private Predmet predmet;
	
	@ManyToOne(targetEntity=Student.class)
    @JoinColumn(name="student_id")
    private Student student;

	public Integer getOcjena() {
		return ocjena;
	}

	public void setOcjena(Integer ocjena) {
		this.ocjena = ocjena;
	}


    public Predmet getPredmet(){
    	return predmet;
    }
    
	public void setPredmet(Predmet predmet) {
		this.predmet = predmet;
	}
	
	public Student getStudent(){
    	return student;
    }
    
	public void setStudent(Student student) {
		this.student = student;
	}
}
