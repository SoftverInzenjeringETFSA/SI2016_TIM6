package ba.isss.repositories;

import ba.isss.models.Obavjestenje;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ObavjestenjeRepository extends PagingAndSortingRepository<Obavjestenje, Integer> {

}
