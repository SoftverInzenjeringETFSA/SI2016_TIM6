package ba.isss.repositories;


import ba.isss.models.Predmet;
import org.springframework.data.repository.Repository;

public interface PredmetRepository extends Repository<Predmet, Integer> {
	Integer count();
	boolean exists(Integer primaryKey);
	Iterable<Predmet> findAll();
	Predmet findOne(Integer id);
}
