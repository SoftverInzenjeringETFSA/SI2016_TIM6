package ba.isss.services;

import ba.isss.models.Pohadjanje;
import ba.isss.models.Predmet;
import ba.isss.models.Student;
import ba.isss.repositories.PohadjanjeRepository;
import ba.isss.repositories.PrijavaRepository;
import ba.isss.models.Prijava;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PrijavaService {
	
	@Autowired
	private PrijavaRepository prijavaRepo;
	@Autowired
	private PrijavaService prijavaService;
	@Autowired
    private PohadjanjeService pohadjanjeService;
	public Iterable<Prijava> findAllByStudentID(Integer id) {
		return prijavaRepo.findAllByStudentId(id);
	}
	
	public void SavePrijava(Prijava p, Student s) throws Exception {
		
	    if(!p.getStudent().equals(s))
	        throw new Exception("ERROR");
		Iterable<Prijava> prijave = prijavaService.findAllByStudentID(p.getStudent().getId());
		Iterable<Pohadjanje> pohadjanja = pohadjanjeService.findAllByStudent(s.getId());
		for (Prijava prijava : prijave) {
			if(p.getStudent().getId() == prijava.getStudent().getId() && p.getIspit().getPredmet().getId() == prijava.getIspit().getPredmet().getId()) {
				throw new IllegalArgumentException("Prijava za ispit postoji");
			}
		}
		int brojac = 0;
		for (Pohadjanje pohadjanje : pohadjanja)
        {
            if(p.getIspit().getPredmet() == pohadjanje.getPredmet())
                brojac++;
            if(p.getIspit().getPredmet() == pohadjanje.getPredmet() && pohadjanje.getOcjena() != null)
                throw new IllegalArgumentException("Student je već upisao ocjenu iz datog predmeta");
        }
		if(brojac == 0)
		    throw  new IllegalArgumentException("Student se ne može prijaviti na predmet koji ne sluša");
		
		Date prijave_do = p.getIspit().getPrijave_do();
		Date trenutno = new Date(System.currentTimeMillis());
		Integer brojPrijava = p.getIspit().getBroj_prijava();
		if(prijave_do.compareTo(trenutno) < 0) 
			throw new IllegalArgumentException("Rok za prijavu istekao");
		if(brojPrijava >= p.getIspit().getKapacitet())
			throw new IllegalArgumentException("Ispitni termin je popunjen");
		else
			brojPrijava++;
		prijavaRepo.updateByBrojPrijavaAndIspitId(brojPrijava,p.getIspit().getId());
		prijavaRepo.save(p);
	}
	
	public void DeletePrijava(Prijava p, Student s) throws Exception {
        if(!p.getStudent().equals(s))
            throw new Exception("ERROR");
        Integer brojPrijava = p.getIspit().getBroj_prijava();
        if(brojPrijava <= 0)
        	throw new IllegalArgumentException("Došlo je do greške u sistemu");
        brojPrijava--;
        prijavaRepo.updateByBrojPrijavaAndIspitId(brojPrijava,p.getIspit().getId());
		prijavaRepo.deleteByPrijavaStudentIdAndPrijavaIspitId(s.getId(), p.getIspit().getId());;
	}
}
