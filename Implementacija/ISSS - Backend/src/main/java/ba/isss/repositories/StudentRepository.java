package ba.isss.repositories;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

import ba.isss.models.Student;

// Public interface
public interface StudentRepository extends Repository<Student, Integer> {
	Student findOne(Integer primaryKey);
	Iterable<Student> findAll();
	Integer count();
	boolean exists(Integer primaryKey);

	Student findStudentByUsername(String user);
	
	@Modifying(clearAutomatically = true)
	@Query("UPDATE Student s SET s.password =:password_hash WHERE s.id=:id")
	int updatePassword(Integer id, String password_hash);
	
}
