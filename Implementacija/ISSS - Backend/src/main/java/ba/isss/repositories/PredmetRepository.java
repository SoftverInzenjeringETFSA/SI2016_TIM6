package ba.isss.repositories;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;

import ba.isss.models.Predmet;

public interface PredmetRepository extends Repository<Predmet, Integer> {
	Integer count();
	boolean exists(Integer primaryKey);
	Iterable<Predmet> findAll();
	Predmet findOne(Integer id);
	
	@Query("SELECT DISTINCT p FROM Predmet p, Student s "
			+ "WHERE s.id=:id_studenta "
			+ "AND p.semestar > s.semestar "
			+ "AND p.odsjek.id = s.odsjek.id")
	Iterable<Predmet> findAllPredmetByStudentAndSemestarAndOdsjek(@Param("id_studenta") Integer id_studenta);
}
