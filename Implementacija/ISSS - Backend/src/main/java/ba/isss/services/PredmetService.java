package ba.isss.services;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ba.isss.dto.PredmetDto;
import ba.isss.dto.PredmetSemestarDto;
import ba.isss.models.Pohadjanje;
import ba.isss.models.Predmet;
import ba.isss.repositories.PohadjanjeRepository;
import ba.isss.repositories.PredmetRepository;
import ba.isss.repositories.StudentRepository;

@Service
public class PredmetService {

	@Autowired
    private StudentRepository studentRepository;
    @Autowired
    PredmetRepository predmetRepository;
    
    @Autowired
    PohadjanjeRepository pohadjanjeRepository;
     
    public Iterable<Predmet> findAll() {
        return this.predmetRepository.findAll();
    }
    
    public Predmet findOne(Integer id) {
    	return this.predmetRepository.findOne(id);
	}

	public Iterable<PredmetSemestarDto> findAllFuture(Integer id_studenta) {
		
		Map<Integer, ArrayList<PredmetDto>> semestri = new HashMap<Integer, ArrayList<PredmetDto>>();
		ArrayList<Predmet> lista = (ArrayList<Predmet>) predmetRepository.findAllPredmetByStudentAndSemestarAndOdsjek(id_studenta);
		
		for (Predmet predmet : lista) {
			Integer brojSemestra = predmet.getSemestar();
			
			if( semestri.get(brojSemestra) == null )
				semestri.put(brojSemestra, new ArrayList<PredmetDto>());
			
			Double prosjek = this.pohadjanjeRepository.findAVGByPredmet(predmet.getId());
			
			PredmetDto predmetA = new PredmetDto(
					predmet.getId(),
					predmet.getNaziv(),
					null,
					predmet.getProfesor().toString(),
					prosjek
				);
			
			ArrayList<PredmetDto> tmp = semestri.get(brojSemestra);
			tmp.add(predmetA);	
		}
		
		Iterator<Entry<Integer, ArrayList<PredmetDto>>> it = semestri.entrySet().iterator();
		ArrayList<PredmetSemestarDto> sviSemestri = new ArrayList<>();
		
	    while (it.hasNext()) {
	        Map.Entry pair = (Map.Entry)it.next();
	        PredmetSemestarDto pr = new PredmetSemestarDto((Integer)pair.getKey(), (ArrayList<PredmetDto>)pair.getValue());
	        sviSemestri.add(pr);
	        it.remove(); // avoids a ConcurrentModificationException
	    }		
		
	    return sviSemestri;
	}
    public ArrayList<PredmetSemestarDto> findAllSemesters(Integer student_id) {
    	Map<Integer, ArrayList<PredmetDto>> semestri = new HashMap<Integer, ArrayList<PredmetDto>>();
		ArrayList<Pohadjanje> lista = (ArrayList<Pohadjanje>) this.pohadjanjeRepository.findAllByStudent(student_id);
		
		for (Pohadjanje pohadjanje : lista) {
			Integer brojSemestra = pohadjanje.getPredmet().getSemestar();
			
			if( semestri.get(brojSemestra) == null )
				semestri.put(brojSemestra, new ArrayList<PredmetDto>());
			
			Double prosjek = this.pohadjanjeRepository.findAVGByPredmet(pohadjanje.getPredmet().getId());
			
			PredmetDto predmet = new PredmetDto(
					pohadjanje.getPredmet().getId(),
					pohadjanje.getPredmet().getNaziv(),
					pohadjanje.getOcjena(),
					pohadjanje.getPredmet().getProfesor().toString(),
					prosjek
				);
			
			ArrayList<PredmetDto> tmp = semestri.get(brojSemestra);
			tmp.add(predmet);	
		}
		
		Iterator<Entry<Integer, ArrayList<PredmetDto>>> it = semestri.entrySet().iterator();
		ArrayList<PredmetSemestarDto> sviSemestri = new ArrayList<>();
		
	    while (it.hasNext()) {
	        Map.Entry pair = (Map.Entry)it.next();
	        PredmetSemestarDto pr = new PredmetSemestarDto((Integer)pair.getKey(), (ArrayList<PredmetDto>)pair.getValue());
	        sviSemestri.add(pr);
	        it.remove(); // avoids a ConcurrentModificationException
	    }		
		
	    return sviSemestri;
	}

}