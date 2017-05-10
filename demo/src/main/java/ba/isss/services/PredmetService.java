package ba.isss.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ba.isss.models.Predmet;
import ba.isss.repositories.PredmetRepository;

@Service
public class PredmetService {
    
    @Autowired
    PredmetRepository repository;
     
    public Iterable<Predmet> findAll() {
        return repository.findAll();
    }
    
    public Predmet findOne(Integer id) {
    	return repository.findOne(id);
	}
    
    
    

}