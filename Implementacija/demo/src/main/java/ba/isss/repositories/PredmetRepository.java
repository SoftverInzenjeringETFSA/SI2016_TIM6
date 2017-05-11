package ba.isss.repositories;

import org.springframework.data.repository.Repository;

import ba.isss.models.Predmet;

public interface PredmetRepository extends Repository<Predmet, Integer> {
	Integer count();
	boolean exists(Integer primaryKey);
	Iterable<Predmet> findAll();
	Predmet findOne(Integer id);
}
