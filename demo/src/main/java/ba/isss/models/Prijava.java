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
@Table(name="prijava")
public class Prijava {
	public Prijava() {
    	
    }
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	
	@ManyToOne(targetEntity=Student.class)
    @JoinColumn(name="student_id")
    private Student student;
	
	@ManyToOne(targetEntity=Ispit.class)
    @JoinColumn(name="ispit_id")
    private Ispit ispit;

	
    public Student getStudent(){
    	return student;
    }
    
	public void setStudent(Student student) {
		this.student = student;
	}
	
	public Ispit getIspit(){
    	return ispit;
    }
    
	public void setIspit(Ispit ispit) {
		this.ispit = ispit;
	}
}
