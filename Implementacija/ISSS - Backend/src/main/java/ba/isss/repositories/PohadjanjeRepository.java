package ba.isss.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import ba.isss.models.Pohadjanje;
import ba.isss.models.Student;

public interface PohadjanjeRepository extends JpaRepository<Pohadjanje, Integer> {

	long count();
	boolean exists(Integer primaryKey);
	List<Pohadjanje> findAll();
	Pohadjanje findOne(Integer id);
	
	@Query("Select p from Pohadjanje p where student_id=?")
	Iterable<Pohadjanje> findAllByStudent(Integer id);
	
	@Query("Select avg(ocjena) from Pohadjanje p where predmet_id=?")
	Double findAVGByPredmet(Integer id);
	
	@Query("SELECT s FROM Student s, Pohadjanje p "
			+ "WHERE s.id = :student_id "
			+ "AND p.predmet.id = :predmet_id "
			+ "AND p.student.id = :student_id")
	Student findOneByStudentId(@Param("student_id") Integer student_id, @Param("predmet_id") Integer predmet_id);
}
