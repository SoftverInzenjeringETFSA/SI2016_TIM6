package ba.isss.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import ba.isss.models.Student;
import ba.isss.repositories.StudentRepository;

@Service
public class StudentService {
    
    @Autowired
    StudentRepository repository;
     
    public void save(Student s) {
        repository.save(s);
    }
     
    public Iterable<Student> findAllStudent() {
        return repository.findAll();
    }

}