package ba.isss.repositories;

import ba.isss.models.Obavjestenja;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ObavjestenjaRepository extends PagingAndSortingRepository<Obavjestenja, Integer> {

}
