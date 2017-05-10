package ba.isss.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ba.isss.models.Obavjestenje;
import ba.isss.repositories.ObavjestenjeRepository;
import ba.isss.dto.PredmetDto;
import ba.isss.dto.PredmetSemestarDto;
import ba.isss.services.PredmetService;

@Service
public class ObavjestenjeService {
	
	 @Autowired
	    ObavjestenjeRepository repository;
	     
	    public Iterable<Obavjestenje> findAll() {
	        return repository.findAll();
	    }
	    
	    public Obavjestenje findOne(Integer id) {
	    	return repository.findOne(id);
		}
	    
	    public Iterable<Obavjestenje> findByStudent(Integer id){
	    	return repository.findAllForStudent(id);
		}
	    
}
