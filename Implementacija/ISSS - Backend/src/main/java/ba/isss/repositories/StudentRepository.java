package ba.isss.repositories;

import org.springframework.data.repository.Repository;

import ba.isss.models.Student;

// Public interface
public interface StudentRepository extends Repository<Student, Integer> {
	Student findOne(Integer primaryKey);
	Iterable<Student> findAll();
	Integer count();
	boolean exists(Integer primaryKey);

	Student findStudentByUsername(String user);
	
}
