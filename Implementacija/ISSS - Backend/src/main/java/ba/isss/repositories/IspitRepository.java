package ba.isss.repositories;

import ba.isss.models.Ispit;
import ba.isss.models.Obavjestenje;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;

public interface IspitRepository extends Repository<Ispit, Integer> {

	long count();
	boolean exists(Integer primaryKey);
	Iterable<Ispit> findAll();
	Ispit findOne(Integer id);
	
	@Query("select i from Ispit i, Prijava p, Student s, Predmet r "
			+ "where s.id = p.student.id and p.ispit.id = i.id and i.predmet.id = r.id and s.id = :id "
			+ "order by i.termin desc")
	Iterable<Ispit> findAllForStudent(@Param("id") Integer id);
}
