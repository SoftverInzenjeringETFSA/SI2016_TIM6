package ba.isss.repositories;

import ba.isss.models.Fakultet;
import org.springframework.data.repository.Repository;

// Public interface
public interface FakultetRepository extends Repository<Fakultet, Integer> {
	Fakultet findOne(Integer primaryKey);
	Iterable<Fakultet> findAll();
	Integer count();
	boolean exists(Integer primaryKey);
}

