package ba.isss.repositories;

import ba.isss.models.Obavjestenje;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

public interface ObavjestenjeRepository extends PagingAndSortingRepository<Obavjestenje, Integer> {

	long count();
	boolean exists(Integer primaryKey);
	Iterable<Obavjestenje> findAll();
	Obavjestenje findOne(Integer id);
	
	@Query("select o from Obavjestenje o, Pohadjanje p, Student s "
			+ "where s.id = p.student.id and p.predmet.id = o.predmet.id and s.id = :id and p.ocjena is null"
			+ "order by o.vrijeme desc")
	Iterable<Obavjestenje> findAllForStudent(@Param("id") Integer id);
}
