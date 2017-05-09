package ba.isss.repositories;

import ba.isss.models.Odsjek;
import org.springframework.data.repository.Repository;

// Public interface
public interface OdsjekRepository extends Repository<Odsjek, Integer> {
	Odsjek findOne(Integer primaryKey);
	Iterable<Odsjek> findAll();
	Integer count();
	boolean exists(Integer primaryKey);
}