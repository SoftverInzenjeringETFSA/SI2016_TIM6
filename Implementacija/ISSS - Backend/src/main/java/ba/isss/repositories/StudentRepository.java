package ba.isss.repositories;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import ba.isss.models.Student;

// Public interface
public interface StudentRepository extends Repository<Student, Integer> {
	Student findOne(Integer primaryKey);
	Iterable<Student> findAll();
	Integer count();
	boolean exists(Integer primaryKey);

	Student findStudentByUsername(String user);
	
	@Modifying(clearAutomatically = true)
	@Transactional
	@Query("UPDATE Student s SET s.password =:pass1 WHERE s.id=:id")
	int updatePassword(@Param("id") Integer id, @Param("pass1") String password_hash);
	
}
