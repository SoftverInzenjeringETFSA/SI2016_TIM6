package ba.isss.repositories;

import ba.isss.models.Prijava;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PrijavaRepository extends CrudRepository<Prijava,Integer> {
	public Iterable<Prijava> findAllByIspitId(Integer id);
	public Iterable<Prijava> findAllByStudentId(Integer id);	//svi ispiti koje je student prijavio

	@Modifying(clearAutomatically = true)
	@Transactional
	@Query("DELETE FROM Prijava p WHERE p.student.id=:student_id AND p.ispit.id=:ispit_id")
	public void deleteByPrijavaStudentIdAndPrijavaIspitId (@Param("student_id")Integer student_id, @Param("ispit_id")Integer ispit_id);
	
	@Modifying
	@Transactional
	public Prijava save(Prijava p);
}
