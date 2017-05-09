package ba.isss.repositories;

import ba.isss.models.Profesor;
import org.springframework.data.repository.Repository;

// Public interface
public interface ProfesorRepository extends Repository<Profesor, Integer> {
	Profesor findOne(Integer primaryKey);
	Iterable<Profesor> findAll();
	Integer count();
	boolean exists(Integer primaryKey);
}
