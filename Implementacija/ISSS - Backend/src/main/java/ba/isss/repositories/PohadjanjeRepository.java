package ba.isss.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import ba.isss.models.Pohadjanje;

public interface PohadjanjeRepository extends JpaRepository<Pohadjanje, Integer> {

	long count();
	boolean exists(Integer primaryKey);
	List<Pohadjanje> findAll();
	Pohadjanje findOne(Integer id);
	
	@Query("Select p from Pohadjanje p where student_id=?")
	//Iterable<Pohadjanje> findAllByStudent(@Param("id") Integer id);
	Iterable<Pohadjanje> findAllByStudent(Integer id);
	
	@Query("Select avg(ocjena) from Pohadjanje p where predmet_id=?")
	Double findAVGByPredmet(Integer id);
	
}
