package ba.isss.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Dictionary;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import ba.isss.dto.PredmetDto;
import ba.isss.dto.PredmetSemestarDto;
import ba.isss.models.Predmet;
import ba.isss.models.Pohadjanje;
import ba.isss.repositories.PohadjanjeRepository;
import ba.isss.repositories.PredmetRepository;

@Service
public class PredmetService {
    
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
    
    public ArrayList<PredmetSemestarDto> findAllSemesters(Integer student_id) {
    	Map<Integer, ArrayList<PredmetDto>> semestri = new HashMap<Integer, ArrayList<PredmetDto>>();
		ArrayList<Pohadjanje> lista = (ArrayList<Pohadjanje>) this.pohadjanjeRepository.findAllByStudent(student_id);
		
		for (Pohadjanje pohadjanje : lista) {
			Integer brojSemestra = pohadjanje.getPredmet().getSemestar();
			
			if( semestri.get(brojSemestra) == null )
				semestri.put(brojSemestra, new ArrayList<PredmetDto>());			
			
			PredmetDto predmet = new PredmetDto(
					pohadjanje.getPredmet().getId(),
					pohadjanje.getPredmet().getNaziv(),
					pohadjanje.getOcjena(),
					pohadjanje.getPredmet().getProfesor().toString()
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