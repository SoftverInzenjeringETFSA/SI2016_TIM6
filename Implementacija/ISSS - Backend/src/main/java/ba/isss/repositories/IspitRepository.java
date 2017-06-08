package ba.isss.repositories;

import ba.isss.models.Ispit;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;

public interface IspitRepository extends Repository<Ispit, Integer> {

	long count();
	boolean exists(Integer primaryKey);
	Iterable<Ispit> findAll();
	Ispit findOne(Integer id);
	
	@Query("select i from Ispit i, Prijava p, Student s, Predmet r, Pohadjanje k "
			+ "where s.id = p.student.id and p.ispit.id = i.id and i.predmet.id = r.id and s.id = :id and k.student.id = s.id and r.id = k.predmet.id and k.ocjena is null "
			+ "and i.termin > current_date() order by i.termin desc")
	Iterable<Ispit> findAllPrijavljeniForStudent(@Param("id") Integer id);
	
	@Query("select distinct i from Ispit i, Prijava p, Pohadjanje po, Student s, Predmet pred "
			+ "where s.id = po.student.id and po.predmet.id = pred.id  and po.ocjena is null and pred.id = i.predmet.id "
			+ "and i.id not in ("
			+ "select isp.id from Ispit isp, Prijava pr, Student st, Predmet pre "
			+ "where st.id = pr.student.id and pr.ispit.id = isp.id and isp.predmet.id = pre.id and st.id = :id "
			+ ") "
			+ "and s.id = :id "
			+ " and i.termin > current_date() and i.prijave_do > current_date order by i.termin desc")
	Iterable<Ispit> findAllNePrijavljeniForStudent(@Param("id") Integer id);
	
	@Query("SELECT i FROM Ispit i, Student s, Prijava p "
			 			+ "WHERE p.student.id=:id "
			 			+ "AND s.id = :id "
			 			+ "AND p.ispit.id = i.id "
			 			+ "AND i.termin < current_date() order by i.termin desc")
	Iterable<Ispit> findAllPrijavljeniForStudentByTermin(@Param("id") Integer id);
}
