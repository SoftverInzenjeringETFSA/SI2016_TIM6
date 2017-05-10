package ba.isss.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;

import ba.isss.models.Pohadjanje;

public interface PohadjanjeRepository extends PagingAndSortingRepository<Pohadjanje, Integer> {

	long count();
	boolean exists(Integer primaryKey);
	Iterable<Pohadjanje> findAll();
	Pohadjanje findOne(Integer id);
}
