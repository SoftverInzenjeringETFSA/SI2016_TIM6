package ba.isss.repositories;

import ba.isss.models.Student;
import org.springframework.data.repository.Repository;

// Public interface
public interface StudentRepository extends Repository<Student, Integer> {
	Student findOne(Integer primaryKey);
	Iterable<Student> findAll();
	Integer count();
	boolean exists(Integer primaryKey);
}
