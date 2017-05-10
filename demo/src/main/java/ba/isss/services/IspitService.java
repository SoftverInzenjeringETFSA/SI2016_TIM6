package ba.isss.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ba.isss.models.Ispit;
import ba.isss.repositories.IspitRepository;

@Service
public class IspitService {
	
	@Autowired
    IspitRepository repository;
     
    public Iterable<Ispit> findAll() {
        return repository.findAll();
    }
    
    public Ispit findOne(Integer id) {
    	return repository.findOne(id);
	}
    
    public Iterable<Ispit> findByStudent(Integer id){
    	return repository.findAllForStudent(id);
	}

}
