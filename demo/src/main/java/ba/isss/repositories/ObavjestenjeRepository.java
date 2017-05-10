package ba.isss.repositories;

import ba.isss.models.Obavjestenje;

import org.springframework.data.repository.PagingAndSortingRepository;

public interface ObavjestenjeRepository extends PagingAndSortingRepository<Obavjestenje, Integer> {

	long count();
	boolean exists(Integer primaryKey);
	Iterable<Obavjestenje> findAll();
	Obavjestenje findOne(Integer id);
}
