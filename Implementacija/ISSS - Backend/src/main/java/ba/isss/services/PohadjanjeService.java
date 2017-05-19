package ba.isss.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ba.isss.models.Pohadjanje;
import ba.isss.repositories.PohadjanjeRepository;

@Service
public class PohadjanjeService {

	@Autowired
	PohadjanjeRepository repository;
	 
	public Iterable<Pohadjanje> findAll() {
	    return repository.findAll();
	}

	public Pohadjanje findOne(Integer id) {
		return repository.findOne(id);
	}
	
	public Iterable<Pohadjanje> findAllByStudent(Integer id)
	{ 
		return repository.findAllByStudent(id);
	}
	
	public Double findAVGByPredmet(Integer id)
	{
		return repository.findAVGByPredmet(id);
	}
	
	
}

