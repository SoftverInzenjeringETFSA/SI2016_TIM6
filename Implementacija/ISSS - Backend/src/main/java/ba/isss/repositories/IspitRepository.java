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
	
	@Query("select i from Ispit i, Prijava p, Student s, Predmet r "
			+ "where s.id = p.student.id and p.ispit.id = i.id and i.predmet.id = r.id and s.id = :id "
			+ "order by i.termin desc")
	Iterable<Ispit> findAllPrijavljeniForStudent(@Param("id") Integer id);
	
	@Query("select distinct i from Ispit i, Prijava p, Pohadjanje po, Student s, Predmet pred "
			+ "where s.id = po.student.id and po.predmet.id = pred.id and pred.id = i.predmet.id "
			+ "and i.id not in ("
			+ "select isp.id from Ispit isp, Prijava pr, Student st, Predmet pre "
			+ "where st.id = pr.student.id and pr.ispit.id = isp.id and isp.predmet.id = pre.id and st.id = :id "
			+ ") "
			+ "and s.id = :id "
			+ "order by i.termin desc")
	Iterable<Ispit> findAllNePrijavljeniForStudent(@Param("id") Integer id);
}
