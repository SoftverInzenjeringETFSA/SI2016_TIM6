package ba.isss.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;

import ba.isss.models.Student;

public interface StudentRepository extends PagingAndSortingRepository<Student, Long> {

}
