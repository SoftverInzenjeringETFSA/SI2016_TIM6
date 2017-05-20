package ba.isss.services;

import ba.isss.repositories.PrijavaRepository;
import ba.isss.models.Ispit;
import ba.isss.models.Prijava;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PrijavaService {
	
	@Autowired
	private PrijavaRepository prijavaRepo;
	private PrijavaService prijavaService;
	public Iterable<Prijava> findAllByStudentID(Integer id) {
		return prijavaRepo.findAllByStudentId(id);
	}
	
	public void SavePrijava(Prijava p) {
		Iterable<Prijava> prijave = prijavaService.findAllByStudentID(p.getStudent().getId());
		
		for (Prijava prijava : prijave) {
			if(p.getStudent().getId() == prijava.getStudent().getId() && p.getIspit().getId() == prijava.getIspit().getId()) {
				throw new IllegalArgumentException("Prijava za ispit postoji");
			}
		}
		
		Integer millis = (p.getIspit().getPrijave_do().getNanos())/1000000;
		Date prijave_do = new Date(millis);
		Date trenutno = new Date(System.currentTimeMillis());
		
		if(prijave_do.compareTo(trenutno) < 0) 
			throw new IllegalArgumentException("Rok za prijavu istekao");
		prijavaRepo.save(p);
	}
	
	public void DeletePrijava(Prijava p) {
		
		prijavaRepo.delete(p);
	}
}
